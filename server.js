// Babel ES6/JSX Compiler
require('babel-register');

var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var faker = require('faker');

var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');



var config = require('./config');
var routes = require('./app/routes');
var Product = require('./models/product');


mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


var compiler = webpack(webpackConfig);
var publicPath = path.resolve(__dirname, 'public');
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));


app.use(express.static(publicPath));

app.post('/api/products', function(req, res, next) {
    Product.count({}, function(err, all) {
        if (err) return next(err);
        var PRODUCT_COUNT = 10;

        for (var i = 0; i < PRODUCT_COUNT; i++) {
            var product = new Product({

                productId: faker.random.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.image(),
                description: faker.lorem.sentence()

            });
            product.save();
        }
        res.send({
            message: 'Item{s} Added Successfully :)'
        });
    });
});


app.get('/api/products/:id', function(req, res, next) {
    var id = req.params.id;

    Product.findOne({
        productId: id
    }, function(err, product) {
        if (err) return next(err);

        if (!product) {
            return res.status(404).send({
                message: 'Product not found.'
            });
        }

        res.send(product);
    });
});


app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('public/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.use(function(err, req, res, next) {
    console.log(err.stack.red);
    res.status(err.status || 500);
    res.send({ message: err.message });
});





var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

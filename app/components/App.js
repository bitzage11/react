import React, { Component } from 'react';
import Topbar from './Topbar';

class App extends Component {
    render() {
        return (
            <div>
      <Topbar />
      <div className="container">
        {this.props.children}
      </div>
      </div>
        );
    }
}

export default App;

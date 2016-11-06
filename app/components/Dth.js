import React, { Component } from 'react';
import { Link } from 'react-router';

class DTH extends Component {


    render() {
        console.log(this);
        return (
            <div id="app">
    <div className="main " data-reactid=".0">
        <header className="_29M2L" data-reactid=".0.0">
            <div className="_2Z4p5" data-reactid=".0.0.0">
                <div className="_18xuj" data-reactid=".0.0.0.0"><span className="_3RpK1" data-reactid=".0.0.0.0.0" /><a className="cIji-" href="/desktop/" data-reactid=".0.0.0.0.1" /><span className="VpncE hide" data-reactid=".0.0.0.0.2">DTH</span></div>
                <div className="_2k4TI" data-reactid=".0.0.0.1">
                    <div className="_13Tms" data-reactid=".0.0.0.1.0"><a className="_3mvx0" href="/desktop/login" data-reactid=".0.0.0.1.0.0">Login/Register</a></div>
                </div>
            </div>
        </header>
        <div className="_3yZQP undefined" data-reactid=".0.1">
            <p data-reactid=".0.1.0" /><span className="_3SvoX" data-reactid=".0.1.1" /></div>
        <div className="container" data-reactid=".0.2">
            <div className="Xevgo " data-reactid=".0.2.0">
                <div data-reactid=".0.2.0.0">
                    <ul className="_3c7MS" data-reactid=".0.2.0.0.0">
                        <li className="_2sSOU" style={{opacity: 1, transform: 'translateX(0px)'}} data-reactid=".0.2.0.0.0.0:$0">
                            <Link to="/" data-reactid=".0.2.0.0.0.0:$0.0"><b data-reactid=".0.2.0.0.0.0:$0.0.0" /><span className="itrbU _1_jE8" data-reactid=".0.2.0.0.0.0:$0.0.1" /><span className="_2bu4b" data-reactid=".0.2.0.0.0.0:$0.0.2">Mobile</span></Link>
                        </li>
                        <li className="_2sSOU" style={{opacity: 1, transform: 'translateX(0px)'}} data-reactid=".0.2.0.0.0.0:$1">
                            <Link to="/dth" data-reactid=".0.2.0.0.0.0:$1.0" className="_3N8XP"><b data-reactid=".0.2.0.0.0.0:$1.0.0" /><span className="itrbU _3iEHo" data-reactid=".0.2.0.0.0.0:$1.0.1" /><span className="_2bu4b" data-reactid=".0.2.0.0.0.0:$1.0.2">DTH</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="wrapper" data-reactid=".0.2.1">
                <div className="main-container" data-reactid=".0.2.1.0"><span data-reactid=".0.2.1.0.0" />
                    <div className="main-container-component" data-reactid=".0.2.1.0.1">
                        <div className="not-logged" data-reactid=".0.2.1.0.1.0">
                            <div className="_2WsoP" data-reactid=".0.2.1.0.1.0.0">
                                <div className="_1tIwh" data-reactid=".0.2.1.0.1.0.0.0">
                                    <p className="heading-1 undefined" data-reactid=".0.2.1.0.1.0.0.0.0"><span data-reactid=".0.2.1.0.1.0.0.0.0.0">Pay your dth bill</span><span data-reactid=".0.2.1.0.1.0.0.0.0.1"> </span><span className="green-tick-completed" data-reactid=".0.2.1.0.1.0.0.0.0.2" /></p>
                                    <p className="heading-2 undefined" data-reactid=".0.2.1.0.1.0.0.0.1">Just give us a few details</p>
                                </div>
                                <div className=" _2oJJ8" data-reactid=".0.2.1.0.1.0.0.1">
                                    <form data-reactid=".0.2.1.0.1.0.0.1.0">
                                        <div className="_2zkmA" data-reactid=".0.2.1.0.1.0.0.1.0.0">
                                            <div className="select-container undefined undefined" data-reactid=".0.2.1.0.1.0.0.1.0.0.0"><select name="operator" data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0"><option disabled data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.0">DTH Operator</option><option value={17} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$17">Airtel Digital TV</option><option value={4} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$4">Dish TV</option><option value={16} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$16">Reliance Digital TV</option><option value={18} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$18">Sun Direct</option><option value={19} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$19">Tata Sky</option><option value={20} data-reactid=".0.2.1.0.1.0.0.1.0.0.0.0.1:$20">Videocon D2H</option></select></div>
                                            <div className="input-container undefined L_T6z false" data-reactid=".0.2.1.0.1.0.0.1.0.0.1"><input placeholder="Enter DTH Number" maxLength={14} type="text" name="number" defaultValue data-reactid=".0.2.1.0.1.0.0.1.0.0.1.0" /><span id="op_loader" className="undefined " data-reactid=".0.2.1.0.1.0.0.1.0.0.1.1" /></div>
                                        </div>
                                        <div className="_28wc8" data-reactid=".0.2.1.0.1.0.0.1.0.1" />
                                        <div className="J6G1A" data-reactid=".0.2.1.0.1.0.0.1.0.2"><button className="btn _3A379" type="submit" data-reactid=".0.2.1.0.1.0.0.1.0.2.0">Proceed</button></div>
                                    </form>
                                </div>
                            </div>
                            <div className="left-container" data-reactid=".0.2.1.0.1.0.1">
                                <div className="KPpYx undefined" data-reactid=".0.2.1.0.1.0.1.0"><img className="_2YLjN" data-reactid=".0.2.1.0.1.0.1.0.0" />
                                    <div className="_2s885" data-reactid=".0.2.1.0.1.0.1.0.1">
                                        <h1>Online DTH Recharge - Enjoy Seamless TV Experience!</h1>
                                        <p>Your DTH recharge cannot get simpler than this! FreeCharge is one of the most trusted website that has around 27 million users.</p>
                                        <p>With the emergence of DTH TV, there is a need to recharge DTH services in order to enjoy a seamless TV experience. But chances are you might forget to recharge on time resulting in a disrupted DTH service. Not anymore! Online DTH recharge is here to rescue you. You can now do DTH recharge online through FreeCharge. You no longer need to rely on shops to get information on the latest channel packs and to recharge your DTH service.</p>
                                        <h2>Online DTH Recharge Offers, Quick and With Rewards</h2>
                                        <p>FreeCharge is a leading online DTH recharge service provider in India. We provide DTH online recharge for an array of companies including Airtel DTH, Reliance DTH, Dish TV, Tata Sky, and Sun Direct. Stay connected with FreeCharge for latest offers and we will ensure that the process is quick and convenient.</p>
                                        <h2>Easy and Efficient Recharges</h2>
                                        <p>The easy option of online recharge of DTH service on FreeCharge is a boon for customers. Now, they can conveniently get their gadgets recharged online, without physically reaching the operator. This has brought about a drastic change in the lives of DTH viewers. Using FreeCharge for online recharge is fast, simple, and secure.</p>
                                    </div>
                                </div>
                                <div className="_23PKX snapdeal-component-ra" data-reactid=".0.2.1.0.1.0.1.1">
                                    <h1 className="heading-1 vxqDS" data-reactid=".0.2.1.0.1.0.1.1.0">Bestselling on Snapdeal</h1>
                                    <div className="g2Vdx" data-reactid=".0.2.1.0.1.0.1.1.1"><span className="wvUgB hide" data-reactid=".0.2.1.0.1.0.1.1.1.0" /><span className="_3nMy4 hide" data-reactid=".0.2.1.0.1.0.1.1.1.1" />
                                        <ul style={{width: 850, transform: 'translateX(-0px)', msTranform: 'translateX(-0px)', WebkitTransform: 'translateX(-0px)', MozTransform: 'translateX(-0px)', OTransform: 'translateX(-0px)', transition: 'all .4s ease'}} data-reactid=".0.2.1.0.1.0.1.1.1.2">
                                            <li className="_1zemY" data-reactid=".0.2.1.0.1.0.1.1.1.2.$0">Power Banks</li>
                                            <li className data-reactid=".0.2.1.0.1.0.1.1.1.2.$1">Personal Care Appliances</li>
                                            <li className data-reactid=".0.2.1.0.1.0.1.1.1.2.$2">Sports Shoes</li>
                                            <li className data-reactid=".0.2.1.0.1.0.1.1.1.2.$3">Men's Watches</li>
                                            <li className data-reactid=".0.2.1.0.1.0.1.1.1.2.$4">Headphones &amp; Earphones</li>
                                        </ul>
                                    </div>
                                    <div className="_1E8cp" data-reactid=".0.2.1.0.1.0.1.1.2"><span className="_2JMKr" data-reactid=".0.2.1.0.1.0.1.1.2.0" /><span className="_3Zd3w" data-reactid=".0.2.1.0.1.0.1.1.2.1" />
                                        <div className="Y8V8y" data-reactid=".0.2.1.0.1.0.1.1.2.2">
                                            <ul className="undefined " style={{transform: 'translateX(-0%)', msTranform: 'translateX(-0%)', WebkitTransform: 'translateX(-0%)', MozTransform: 'translateX(-0%)', OTransform: 'translateX(-0%)'}} data-reactid=".0.2.1.0.1.0.1.1.2.2.0">
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.0"><img src="https://n3.sdlcdn.com/imgs/a/7/x/166x194/Intex-IT-PB11K-11000-mAh-SDL862696458-1-562d3.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.0.1">63</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.1">Intex IT-PB11K 11000 mAh Power Bank - White - for iOS and Android Devices</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3.0.1">2300</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.0.1.3.2">849</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.0"><img src="https://n3.sdlcdn.com/imgs/b/e/z/166x194/Intex-IT-PB11K-11000-mAh-SDL794222934-1-85c24.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.0.1">63</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.1">Intex IT-PB11K 11000 mAh Power Bank - Black - for iOS and Android Devices</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3.0.1">2300</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.1.1.3.2">849</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.0"><img src="https://n3.sdlcdn.com/imgs/a/7/b/166x194/amwhite-0c4ed.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.0.1">64</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.1">Ambrane P-1111 10000 mAh Power Bank - Blue &amp; White - for iOS and Android Devices</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3.0.1">1799</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.2.1.3.2">649</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.0"><img src="https://n3.sdlcdn.com/imgs/a/6/6/166x194/Ambrane-P-1111-10000-mAh-SDL148426419-1-6f3fe.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.0.1">64</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.1">Ambrane P-1111 10000 mAh Power Bank - Black - for iOS and Android Devices</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3.0.1">1799</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.3.1.3.2">649</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.0"><img src="https://n3.sdlcdn.com/imgs/b/n/g/166x194/1-a6239.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.0.1">64</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.1">Intex IT-PB-2K 2000mAh Power Bank - White</p>
                                                        <p className="_21fzs _3WXS9" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3.0.1">699</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.4.1.3.2">249</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.0"><img src="https://n3.sdlcdn.com/imgs/c/p/3/166x194/Intex-IT-PB11K-N-11000-SDL090590722-1-067a1.JPG" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.0.1">49</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.1">Intex IT- PB11K N 11000 mAh Li-Ion Power Bank</p>
                                                        <p className="_21fzs _3WXS9" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3.0.1">1750</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.5.1.3.2">899</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.0"><img src="https://n3.sdlcdn.com/imgs/c/4/6/166x194/editimag-1a857.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.0.1">79</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.1">Callmate PBW15-2600WH 2600 mAh Power Bank - Multicolor</p>
                                                        <p className="_21fzs _3BN31" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3.0.1">999</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.6.1.3.2">209</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.0"><img src="https://n3.sdlcdn.com/imgs/a/v/6/166x194/Ambrane-13000mAh-PowerBank-White-and-SDL549369182-1-f1a83.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.0.1">60</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.1">Ambrane 13000mAh PowerBank - White and Black - for iOS and Android Devices</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3.0.1">2499</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.7.1.3.2">999</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.0"><img src="https://n3.sdlcdn.com/imgs/b/w/2/166x194/Intex-IT-PB12-5K-12500mAh-SDL998278101-1-1eb58.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.0.1">58</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.1">Intex IT-PB12.5K 12500 mAh Power Bank- Red &amp; Black</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3.0.1">2400</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.8.1.3.2">1011</span></p>
                                                    </div>
                                                </li>
                                                <li className="_1Ut0E" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9">
                                                    <div className="_2sjOq" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.0"><img src="https://n3.sdlcdn.com/imgs/b/w/3/166x194/Intex-IT-PB16K-16000mAh-Power-SDL304602867-1-6175e.jpg" alt data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.0.0" /></div>
                                                    <div className="kVcfz" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1">
                                                        <p className="btn dN4gj" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.0.1">58</span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.0.2">% OFF</span></p>
                                                        <p className="_3Lz6O" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.1">Intex IT-PB16K 16000mAh Power Bank White</p>
                                                        <p className="_21fzs zmGfA" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.2">&nbsp;</p>
                                                        <p className="_3ledV" data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3"><b data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3.0"><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3.0.0">₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3.0.1">2900</span></b><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3.1"> ₹ </span><span data-reactid=".0.2.1.0.1.0.1.1.2.2.0.9.1.3.2">1209</span></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="merchants-component" data-reactid=".0.2.1.0.1.0.1.2">
                                    <h1 className="heading-1 _2ZMjG" data-reactid=".0.2.1.0.1.0.1.2.0"><span data-reactid=".0.2.1.0.1.0.1.2.0.0"> </span><span data-reactid=".0.2.1.0.1.0.1.2.0.1">We are accepted at</span><span data-reactid=".0.2.1.0.1.0.1.2.0.2"> </span><a target="_blank" href="http://offers.freecharge.com/merchants" className="btn" data-reactid=".0.2.1.0.1.0.1.2.0.3">show more</a></h1>
                                    <div className="_1Gx3f" data-reactid=".0.2.1.0.1.0.1.2.1">
                                        <ul data-reactid=".0.2.1.0.1.0.1.2.1.0" />
                                        <div className="_3iLMi hide" data-reactid=".0.2.1.0.1.0.1.2.1.1">
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.0">
                                                <a href="/desktop/airtel-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.0.0"><img src="/desktop/images/providers/airtel.png" alt="Airtel" data-reactid=".0.2.1.0.1.0.1.2.1.1.0.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.1">
                                                <a href="/desktop/vodafone-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.1.0"><img src="/desktop/images/providers/vodafone.png" alt="vodafone" data-reactid=".0.2.1.0.1.0.1.2.1.1.1.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.2">
                                                <a href="/desktop/tata-docomo-gsm-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.2.0"><img src="/desktop/images/providers/docomo.png" alt="tata docomo" data-reactid=".0.2.1.0.1.0.1.2.1.1.2.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.3">
                                                <a href="/desktop/idea-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.3.0"><img src="/desktop/images/providers/idea.png" alt="idea" data-reactid=".0.2.1.0.1.0.1.2.1.1.3.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.4">
                                                <a href="/desktop/aircel-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.4.0"><img src="/desktop/images/providers/aircel.png" alt="aircel" data-reactid=".0.2.1.0.1.0.1.2.1.1.4.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.5">
                                                <a href="/desktop/bsnl-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.5.0"><img src="/desktop/images/providers/bsnl.png" alt="bsnl" data-reactid=".0.2.1.0.1.0.1.2.1.1.5.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.6">
                                                <a href="/desktop/telenor-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.6.0"><img src="/desktop/images/providers/telenor.png" alt="telenor" data-reactid=".0.2.1.0.1.0.1.2.1.1.6.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.1.0.1.0.1.2.1.1.7">
                                                <a href="/desktop/virgin-gsm-prepaid-mobile-recharge" data-reactid=".0.2.1.0.1.0.1.2.1.1.7.0"><img src="/desktop/images/providers/virgin.png" alt="virgin" data-reactid=".0.2.1.0.1.0.1.2.1.1.7.0.0" /></a>
                                            </div>
                                        </div>
                                        <div className="_3iLMi" data-reactid=".0.2.1.0.1.0.1.2.1.2">
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$0"><img src="/desktop/images/merchants/sd_new.png" alt="Snapdeal" data-reactid=".0.2.1.0.1.0.1.2.1.2.$0.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$1"><img src="/desktop/images/merchants/mcd.png" alt="McDonalds" data-reactid=".0.2.1.0.1.0.1.2.1.2.$1.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$2"><img src="/desktop/images/merchants/ss.png" alt="Shoppers Stop" data-reactid=".0.2.1.0.1.0.1.2.1.2.$2.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$3"><img src="/desktop/images/merchants/ccd.png" alt="Cafe Coffee Day" data-reactid=".0.2.1.0.1.0.1.2.1.2.$3.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$4"><img src="/desktop/images/merchants/jabong.png" alt="Jabong" data-reactid=".0.2.1.0.1.0.1.2.1.2.$4.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$5"><img src="/desktop/images/merchants/bms.png" alt="Book My Show" data-reactid=".0.2.1.0.1.0.1.2.1.2.$5.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$6"><img src="/desktop/images/merchants/redbus.png" alt="Redbus" data-reactid=".0.2.1.0.1.0.1.2.1.2.$6.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$7"><img src="/desktop/images/merchants/barista.png" alt="Barista" data-reactid=".0.2.1.0.1.0.1.2.1.2.$7.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$8"><img src="/desktop/images/merchants/cleartrip.png" alt="Cleartrip" data-reactid=".0.2.1.0.1.0.1.2.1.2.$8.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$9"><img src="/desktop/images/merchants/goi.png" alt="Goibibo" data-reactid=".0.2.1.0.1.0.1.2.1.2.$9.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$10"><img src="/desktop/images/merchants/hc.png" alt="Hypercity" data-reactid=".0.2.1.0.1.0.1.2.1.2.$10.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$11"><img src="/desktop/images/merchants/fun.png" alt="Fun Cinemas" data-reactid=".0.2.1.0.1.0.1.2.1.2.$11.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$12"><img src="/desktop/images/merchants/fm.png" alt="Fresh Menu" data-reactid=".0.2.1.0.1.0.1.2.1.2.$12.0" /></div>
                                            <div style={{transform: 'scale(1)'}} data-reactid=".0.2.1.0.1.0.1.2.1.2.$13"><img src="/desktop/images/merchants/hp.png" alt="HP" data-reactid=".0.2.1.0.1.0.1.2.1.2.$13.0" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-bar" data-reactid=".0.2.2">
                <div data-reactid=".0.2.2.0">
                    <div className="_1ysFn" data-reactid=".0.2.2.0.0">
                        <h1 className="heading-1 undefined" data-reactid=".0.2.2.0.0.0"> Spotlight </h1>
                        <div className="_20VUJ _1N8Kr" data-reactid=".0.2.2.0.0.1">
                            <div className="slick-initialized slick-slider" data-reactid=".0.2.2.0.0.1.0"><button type="button" data-role="none" className="slick-arrow slick-prev slick-disabled" style={{display: 'block'}} data-reactid=".0.2.2.0.0.1.0.0"> Previous</button>
                                <div className="slick-list" data-reactid=".0.2.2.0.0.1.0.1">
                                    <div className="slick-track" data-reactid=".0.2.2.0.0.1.0.1.0" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)', width: 750}}>
                                        <div data-index={0} className="slick-slide slick-active" tabIndex={-1} style={{outline: 'none', width: 250}} data-reactid=".0.2.2.0.0.1.0.1.0.$original0">
                                            <div data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$0">
                                                <a href="http://offers.freecharge.com/HPCL" target="_blank" data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$0.0"><img src="https://d32vr05tkg9faf.cloudfront.net/content/images/splash/bannerImage323" alt data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$0.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$1">
                                                <a href="https://offers.freecharge.com/McD" target="_blank" data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$1.0"><img src="https://d32vr05tkg9faf.cloudfront.net/content/images/missions/MCD.png" alt data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$1.0.0" /></a>
                                            </div>
                                            <div data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$2">
                                                <a href="https://offers.freecharge.com/2FC/" target="_blank" data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$2.0"><img src="https://d32vr05tkg9faf.cloudfront.net/content/images/missions/2FC_280x80.png" alt data-reactid=".0.2.2.0.0.1.0.1.0.$original0.$2.0.0" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div><button type="button" data-role="none" className="slick-arrow slick-next slick-disabled" style={{display: 'block'}} data-reactid=".0.2.2.0.0.1.0.2"> Next</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="overlay" style={{display: 'none'}} className="overlay " data-reactid=".0.2.3" /></div>
        <footer className="_34M6Q" data-reactid=".0.3">
            <div className="_QVj0" data-reactid=".0.3.0">
                <ul data-reactid=".0.3.0.0">
                    <li className="heading-3" data-reactid=".0.3.0.0.0"><a href="/online-mobile-recharge" data-reactid=".0.3.0.0.0.0">mobile recharge</a></li>
                    <li data-reactid=".0.3.0.0.1"><a href="/airtel-prepaid-mobile-recharge" data-reactid=".0.3.0.0.1.0">Airtel</a></li>
                    <li data-reactid=".0.3.0.0.2"><a href="/aircel-prepaid-mobile-recharge" data-reactid=".0.3.0.0.2.0">Aircel</a></li>
                    <li data-reactid=".0.3.0.0.3"><a href="/vodafone-prepaid-mobile-recharge" data-reactid=".0.3.0.0.3.0">Vodafone</a></li>
                    <li data-reactid=".0.3.0.0.4"><a href="/bsnl-prepaid-mobile-recharge" data-reactid=".0.3.0.0.4.0">BSNL</a></li>
                    <li data-reactid=".0.3.0.0.5"><a href="/tata-docomo-gsm-prepaid-mobile-recharge" data-reactid=".0.3.0.0.5.0">Tata Docomo GSM</a></li>
                    <li data-reactid=".0.3.0.0.6"><a href="/idea-prepaid-mobile-recharge" data-reactid=".0.3.0.0.6.0">Idea</a></li>
                    <li data-reactid=".0.3.0.0.7"><a href="/tata-indicom-walky-prepaid-mobile-recharge" data-reactid=".0.3.0.0.7.0">indicom Walky</a></li>
                    <li data-reactid=".0.3.0.0.8"><a href="/mtnl-trump-prepaid-mobile-recharge" data-reactid=".0.3.0.0.8.0">MTNL Delhi</a></li>
                    <li data-reactid=".0.3.0.0.9"><a href="/reliance-cdma-prepaid-mobile-recharge" data-reactid=".0.3.0.0.9.0">Reliance CDMA</a></li>
                    <li data-reactid=".0.3.0.0.a"><a href="/reliance-gsm-prepaid-mobile-recharge" data-reactid=".0.3.0.0.a.0">Reliance GSM</a></li>
                    <li data-reactid=".0.3.0.0.b"><a href="/tata-indicom-prepaid-mobile-recharge" data-reactid=".0.3.0.0.b.0">Tata Indicom</a></li>
                    <li data-reactid=".0.3.0.0.c"><a href="/telenor-mobile-recharge" data-reactid=".0.3.0.0.c.0">Telenor</a></li>
                    <li data-reactid=".0.3.0.0.d"><a href="/mts-prepaid-mobile-recharge" data-reactid=".0.3.0.0.d.0">MTS</a></li>
                    <li data-reactid=".0.3.0.0.e"><a href="/videocon-prepaid-mobile-recharge" data-reactid=".0.3.0.0.e.0">Videocon</a></li>
                    <li data-reactid=".0.3.0.0.f"><a href="/virgin-cdma-prepaid-mobile-recharge" data-reactid=".0.3.0.0.f.0">Virgin CDMA</a></li>
                    <li data-reactid=".0.3.0.0.g"><a href="/virgin-gsm-prepaid-mobile-recharge" data-reactid=".0.3.0.0.g.0">Virgin GSM</a></li>
                    <li data-reactid=".0.3.0.0.h"><a href="/tata-docomo-cdma-prepaid-mobile-recharge" data-reactid=".0.3.0.0.h.0">Tata Docomo CDMA</a></li>
                </ul>
                <ul data-reactid=".0.3.0.1">
                    <li className="heading-3" data-reactid=".0.3.0.1.0"><a href="/online-datacard-recharge" data-reactid=".0.3.0.1.0.0">data card recharge</a></li>
                    <li data-reactid=".0.3.0.1.1"><a href="/tata-photon-datacard-online-recharge" data-reactid=".0.3.0.1.1.0">Tata Photon</a></li>
                    <li data-reactid=".0.3.0.1.2"><a href="/mts-mblaze-recharge" data-reactid=".0.3.0.1.2.0">MTS MBlaze</a></li>
                    <li data-reactid=".0.3.0.1.3"><a href="/mts-mbrowse-datacard-recharge" data-reactid=".0.3.0.1.3.0">MTS MBrowse</a></li>
                    <li data-reactid=".0.3.0.1.4"><a href="/reliance-netconnect-datacard-recharge" data-reactid=".0.3.0.1.4.0">Reliance Netconnect</a></li>
                    <li data-reactid=".0.3.0.1.5"><a href="/airtel-datacard-recharge" data-reactid=".0.3.0.1.5.0">Airtel</a></li>
                    <li data-reactid=".0.3.0.1.6"><a href="/bsnl-datacard-recharge" data-reactid=".0.3.0.1.6.0">BSNL</a></li>
                    <li data-reactid=".0.3.0.1.7"><a href="/aircel-datacard-recharge" data-reactid=".0.3.0.1.7.0">Aircel</a></li>
                    <li data-reactid=".0.3.0.1.8"><a href="/mtnl-delhi-datacard-online-recharge" data-reactid=".0.3.0.1.8.0">MTNL Delhi</a></li>
                    <li data-reactid=".0.3.0.1.9"><a href="/vodafone-datacard-online-recharge" data-reactid=".0.3.0.1.9.0">Vodafone</a></li>
                    <li data-reactid=".0.3.0.1.a"><a href="/idea-datacard-recharge" data-reactid=".0.3.0.1.a.0">Idea</a></li>
                    <li data-reactid=".0.3.0.1.b"><a href="/reliance-gsm-datacard-recharge" data-reactid=".0.3.0.1.b.0">Reliance GSM</a></li>
                    <li data-reactid=".0.3.0.1.c"><a href="/mtnl-mumbai-datacard-recharge" data-reactid=".0.3.0.1.c.0">MTNL Mumbai</a></li>
                    <li data-reactid=".0.3.0.1.d"><a href="/tata-photon-whiz-datacard-recharge" data-reactid=".0.3.0.1.d.0">Tata Photon Whiz</a></li>
                </ul>
                <ul data-reactid=".0.3.0.2">
                    <li className="heading-3" data-reactid=".0.3.0.2.0"><a href="/online-dth-recharge" data-reactid=".0.3.0.2.0.0">dth(tv) recharge</a></li>
                    <li data-reactid=".0.3.0.2.1"><a href="/online-airtel-dth-recharge" data-reactid=".0.3.0.2.1.0">Airtel Digital TV</a></li>
                    <li data-reactid=".0.3.0.2.2"><a href="/online-big-tv-recharge" data-reactid=".0.3.0.2.2.0">Reliance Digital TV</a></li>
                    <li data-reactid=".0.3.0.2.3"><a href="/online-dish-tv-recharge" data-reactid=".0.3.0.2.3.0">Dish TV</a></li>
                    <li data-reactid=".0.3.0.2.4"><a href="/online-tata-sky-recharge" data-reactid=".0.3.0.2.4.0">Tata Sky</a></li>
                    <li data-reactid=".0.3.0.2.5"><a href="/online-sun-direct-recharge" data-reactid=".0.3.0.2.5.0">Sun Direct</a></li>
                    <li data-reactid=".0.3.0.2.6"><a href="/videocon-d2h-online-recharge" data-reactid=".0.3.0.2.6.0">Videocon D2H</a></li>
                </ul>
                <ul data-reactid=".0.3.0.3">
                    <li className="heading-3" data-reactid=".0.3.0.3.0"><a href="/postpaid-bill-payment" data-reactid=".0.3.0.3.0.0">postpaid</a></li>
                    <li data-reactid=".0.3.0.3.1"><a href="/airtel-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.1.0">Airtel Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.2"><a href="/bsnl-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.2.0">BSNL Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.3"><a href="/tata-docomo-gsm-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.3.0">Tata Docomo GSM Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.4"><a href="/tata-docomo-cdma-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.4.0">Tata Docomo CDMA Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.5"><a href="/idea-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.5.0">Idea Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.6"><a href="/vodafone-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.6.0">Vodafone Bill Payment</a></li>
                    <li data-reactid=".0.3.0.3.7"><a href="/reliance-gsm-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.7.0">Reliance GSM Bill</a></li>
                    <li data-reactid=".0.3.0.3.8"><a href="/reliance-cdma-mobile-postpaid-bill-payment" data-reactid=".0.3.0.3.8.0">Reliance CDMA Bill</a></li>
                </ul>
                <ul data-reactid=".0.3.0.4">
                    <li className="heading-3" data-reactid=".0.3.0.4.0">freecharge</li>
                    <li data-reactid=".0.3.0.4.1"><a href="/desktop/aboutus" data-reactid=".0.3.0.4.1.0">About Us</a></li>
                    <li data-reactid=".0.3.0.4.2"><a target="_blank" href="http://support.freecharge.in" data-reactid=".0.3.0.4.2.0">Support</a></li>
                    <li data-reactid=".0.3.0.4.3"><a href="/desktop/contactus" data-reactid=".0.3.0.4.3.0">Contact Us</a></li>
                    <li data-reactid=".0.3.0.4.4"><a href="/desktop/sitemap" data-reactid=".0.3.0.4.4.0">Sitemap</a></li>
                    <li data-reactid=".0.3.0.4.5"><a target="_blank" href="http://geekery.freecharge.in" data-reactid=".0.3.0.4.5.0">Geekery</a></li>
                    <li data-reactid=".0.3.0.4.6"><a href="/desktop/termsandconditions" data-reactid=".0.3.0.4.6.0">T &amp; C</a></li>
                    <li data-reactid=".0.3.0.4.7"><a target="_blank" href="http://blog.freecharge.in/" data-reactid=".0.3.0.4.7.0">Blog</a></li>
                </ul>
                <ul data-reactid=".0.3.0.5">
                    <li className="heading-3" data-reactid=".0.3.0.5.0">mobile</li>
                    <li data-reactid=".0.3.0.5.1"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.freecharge.android" data-reactid=".0.3.0.5.1.0">Android App</a></li>
                    <li data-reactid=".0.3.0.5.2"><a target="_blank" href="http://www.windowsphone.com/en-in/store/app/freecharge-recharge-mobile-dth-data-card/353ad694-42a4-4b60-bfe6-c250a6526f17" data-reactid=".0.3.0.5.2.0">Windows</a></li>
                    <li data-reactid=".0.3.0.5.3"><a target="_blank" href="https://www.freecharge.in/mobile" data-reactid=".0.3.0.5.3.0">Mobile Site</a></li>
                    <li data-reactid=".0.3.0.5.4"><a target="_blank" href="https://itunes.apple.com/us/app/recharge-mobile-dth-online/id877495926" data-reactid=".0.3.0.5.4.0">IOS</a></li>
                </ul>
                <ul data-reactid=".0.3.0.6">
                    <li className="heading-3" data-reactid=".0.3.0.6.0">join us</li>
                    <li data-reactid=".0.3.0.6.1"><a target="_blank" href="https://www.facebook.com/freecharge" className="_3Bik7 footer-icon" data-reactid=".0.3.0.6.1.0" /></li>
                    <li data-reactid=".0.3.0.6.2"><a target="_blank" href="https://plus.google.com/+freecharge" className="CkGMu footer-icon" data-reactid=".0.3.0.6.2.0" /></li>
                    <li data-reactid=".0.3.0.6.3"><a target="_blank" href="https://twitter.com/freecharge" className="_17R80 footer-icon" data-reactid=".0.3.0.6.3.0" /></li>
                </ul>
                <div className="n8OGQ" data-reactid=".0.3.0.7"><span data-reactid=".0.3.0.7.0">Download the app</span>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.freecharge.android" data-reactid=".0.3.0.7.1"><img src="/desktop/images/google-play.png" alt="Google play" data-reactid=".0.3.0.7.1.0" /></a>
                    <a target="_blank" href="https://itunes.apple.com/us/app/recharge-mobile-dth-online/id877495926" data-reactid=".0.3.0.7.2"><img src="/desktop/images/app-store-icon.png" alt="App Store" data-reactid=".0.3.0.7.2.0" /></a>
                    <a target="_blank" href="http://www.windowsphone.com/en-in/store/app/freecharge-recharge-mobile-dth-data-card/353ad694-42a4-4b60-bfe6-c250a6526f17" data-reactid=".0.3.0.7.3"><img src="/desktop/images/windows-store-btn.png" alt="Windows Store" data-reactid=".0.3.0.7.3.0" /></a><span data-reactid=".0.3.0.7.4">secured</span><img src="/desktop/images/visa.png" alt="VISA" data-reactid=".0.3.0.7.5" /><img src="/desktop/images/mastercrd.png" alt="MasterCard" data-reactid=".0.3.0.7.6" />
                    <a href="https://sisainfosec.com/site/certificate/49246369204004493625" target="_blank" data-reactid=".0.3.0.7.7"><img src="/desktop/images/secure.png" alt="SecureScan" data-reactid=".0.3.0.7.7.0" /></a>
                    <a href="https://www.globalsign.com/en/" target="_blank" data-reactid=".0.3.0.7.8"><img src="/desktop/images/geotrust.png" alt="GeoTrust" data-reactid=".0.3.0.7.8.0" /></a>
                </div>
            </div>
            <div className="_1blvD" data-reactid=".0.3.1">
                <div className="_QVj0" data-reactid=".0.3.1.0"><span data-reactid=".0.3.1.0.0"><span data-reactid=".0.3.1.0.0.0">© </span><span data-reactid=".0.3.1.0.0.1">  Freecharge Payment Technologies Pvt. Ltd. All Rights Reserved</span></span>
                </div>
            </div>
        </footer>
    </div>
</div>);
    }
}

export default DTH;

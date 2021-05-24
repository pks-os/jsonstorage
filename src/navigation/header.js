import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="header-content">
                                <div className="header-content-inner">
                                    <h1>Multi-channel content storage and personalization for your headless website, mobile app, or anything else!</h1>
                                    <a href="#examples" className="btn btn-outline btn-xl page-scroll">Start Now for Free!</a>&nbsp;
                                    <a href="https://app.jsonstorage.net/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-warning btn-xl">[New] Try the app!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="device-container">
                                <div className="device-mockup iphone6 portrait white">
                                    <div className="device">
                                        <div className="screen">
                                            <img src="img/header.png" className="img-responsive" alt="" />
                                        </div>
                                        <div className="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

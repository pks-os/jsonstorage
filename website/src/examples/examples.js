import React, { Component } from 'react';

class Examples extends Component {
    render() {
        return (
            <section id="features" className="features download bg-primary text-center" >
                <div className="container">
                    <div className="row" >
                        <div className="col-md-4">
                            <div className="device-container">
                                <div className="device-mockup iphone6_plus portrait white">
                                    <div className="device">
                                        <div className="screen">
                                            <img src="img/header.png" className="img-responsive" alt="" /> </div>
                                        <div className="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="feature-item">
                                            <i className="icon-screen-smartphone text-primary"></i>
                                            <h3>Works on all devices</h3>
                                            <p className="text-muted">Post the data from desktop app, get it from web/mobile app or vice versa</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item">
                                            <i className="icon-puzzle text-primary"></i>
                                            <h3>Flexible API</h3>
                                            <p className="text-muted">All requests support cross-origin resource sharing (CORS)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="feature-item">
                                            <i className="icon-present text-primary"></i>
                                            <h3>Free to Use</h3>
                                            <p className="text-muted">Free to use for any purpose, as long as you don't issue to many requests</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item">
                                            <i className="icon-lock-open text-primary"></i>
                                            <h3>Secure</h3>
                                            <p className="text-muted">You can get the data only if you know the ID. All requests are server over SSL.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Examples;

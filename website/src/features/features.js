import React, { Component } from 'react';
import EmbeddedGist from '../shared/EmbeddedGist.js';

class Features extends Component {
    render() {
        return (
            <section id="examples" className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Request JSON</h2>
                            <p><span className="label label-success">GET</span> /api/items/(id)</p>
                            <p>
                                Response:
                                200 OK - Your JSON data returned
                              </p>
                            <p>
                                Example (<a href="https://jsfiddle.net/adoprog/s4tue5g6/" target="_blank" rel="noopener noreferrer">JSFiddle</a>)
                            </p>
                            <p>
                                <EmbeddedGist gist="anonymous/d0b1af4074c5ddda4a0fbc344ed33f89" file="get.js"></EmbeddedGist>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Create JSON</h2>
                            <p><span className="label label-info">POST</span> /api/items</p>
                            <p>
                                Response:
                                201 Created - {"{"}"uri":"https://jsonstorage.net/api/items/(id)"{"}"}
                            </p>
                            <p>
                                Example:
                            </p>
                            <p>
                                <EmbeddedGist gist="anonymous/450bd7eac263c9d3200eca4901b83083" file="set.js"></EmbeddedGist>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Update JSON</h2>
                            <p><span className="label label-warning">PUT</span> /api/items/(id)</p>
                            <p>
                                Server response:
                                200 OK - Your JSON data returned
                            </p>
                            <p>
                                Example:
                            </p>
                            <p>
                                <EmbeddedGist gist="anonymous/2d3b8b5a3d6894ce13a2d03a9c29b453" file="update.js"></EmbeddedGist>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;

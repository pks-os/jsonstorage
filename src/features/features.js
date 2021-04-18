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
                            <p><span className="label label-success">GET</span> /v1/json/(id)</p>
                            <p>
                                Response:
                                200 OK - Your JSON data returned
                              </p>
                            <p>
                                Example (<a href="https://jsfiddle.net/adoprog/s4tue5g6/" target="_blank" rel="noopener noreferrer">JSFiddle</a>)
                            </p>
                            <p>
                                <EmbeddedGist gist="adoprog/bcc09bd28c455e31901c15144f86c2e8" file="get.js"></EmbeddedGist>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Create JSON</h2>
                            <p><span className="label label-info">POST</span> /v1/json</p>
                            <p>
                                Response:
                                201 Created - {"{"}"uri":"https://api.jsonstorage.net/v1/json/(id)"{"}"}
                            </p>
                            <p>
                                Example:
                            </p>
                            <p>
                                <EmbeddedGist gist="adoprog/a9e7cc59c063cfc526160ecfa4fbdd0e" file="set.js"></EmbeddedGist>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Update JSON</h2>
                            <p><span className="label label-warning">PUT</span> /v1/json/(id)</p>
                            <p>
                                Server response:
                                200 OK - Your JSON data returned
                            </p>
                            <p>
                                Example:
                            </p>
                            <p>
                                <EmbeddedGist gist="adoprog/49f079e4141a598e59ecb6191ada6412" file="update.js"></EmbeddedGist>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;

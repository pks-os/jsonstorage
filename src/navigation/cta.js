import React, { Component } from 'react';
import ItemService from '../api/item.js'
import './cta.css';

class Cta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: "{ \"key\": \"some value\",\"key2\": \"another value\" }",
            itemUri: ""
        }
    }

    handleClick() {
        var obj = JSON.parse(this.state.itemData);
        console.log(obj);

        ItemService
            .create(obj)
            .then((response) => {
                console.log(response.uri);
                this.setState({
                    itemUri: response.uri
                })
                alert('Your data is ready: ' + response.uri)
            })
            .catch((response) => {
                console.log('Request failed');
            });
    }

    updateInputValue(evt) {
        this.setState({
            itemData: evt.target.value
        });
    }

    render() {
        return (
            <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <textarea id="data" rows="10" cols="100" value={this.state.itemData} onChange={evt => this.updateInputValue(evt)}></textarea>
                        <br /><br />
                        <input id="clickMe" className="btn btn-outline btn-xl action" onClick={e => this.handleClick(e)} type="button" value="Store your data" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;

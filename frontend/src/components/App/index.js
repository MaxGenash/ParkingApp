import React, { Component } from 'react'

export default class App extends Component {
    state = {
        ok: "ok"
    };

    render() {
        return (
            <div className='container'>
                Hello world! state = {this.state.ok}
            </div>
        )
    }
}

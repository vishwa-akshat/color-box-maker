import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: `${this.props.background}`, height: `${this.props.height}em`, width: `${this.props.width}em`}}>
                </div>
                <button onClick={this.props.remove}>Remove the box!</button>
            </div>
        )
    }
}

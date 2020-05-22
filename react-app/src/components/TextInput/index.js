import React, { Component } from'react';
import './style.css';

class TextInput extends Component{

    render () {
        return (
            <div className="text-input">
                <span className="label">{this.props.label}</span>
                <input
                    type="text"
                    className="input"
                />


            </div>
        )
    }
}

export default TextInput;




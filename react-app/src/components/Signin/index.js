import React, { Component } from'react';
import TextInput from "../TextInput";
import './style.css';


class SignIn extends Component {

    state ={
        email: '',
        pincode: '',

   };

    render () {
        return (
            <div className="sing-in">
                <TextInput label="email" />
                <TextInput label="pincode" />
            </div>

        )
    }
}

export default SignIn;

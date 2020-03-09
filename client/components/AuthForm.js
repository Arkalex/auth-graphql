import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: ''
        }
    }

    onInputChange(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className="row">
                <form className="col s4">
                <div className="input-field">
                        <label>Email</label>
                        <input 
                            name="email"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                            type="password"
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;
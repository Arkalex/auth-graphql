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
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state)
    }

    render() {
        return(
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s4">
                    <div className="input-field">
                        <input 
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onInputChange.bind(this)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onInputChange.bind(this)}
                            type="password"
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map(error => {
                            <div key={error}>
                                {error}
                            </div>
                        })}
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;
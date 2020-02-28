import React, { Component } from 'react';
import { onSignup, onSignin} from './favorites-api.js'

export default class Login extends Component {
    state = {
        usernameSignIn: '',
        passwordSignIn: '',
        usernameSignUp: '',
        passwordSignUp: ''
    }

    handleUsernameSignIn(e) {
        this.setState({usernameSignIn: e.target.value})
    }

    handlePasswordSignIn(e) {
        this.setState({passwordSignIn: e.target.value})
    }

    handleUsernameSignUp(e) {
        this.setState({usernameSignUp: e.target.value})
    }

    handlePasswordSignUp(e) {
        this.setState({passwordSignUp: e.target.value})
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        const user = {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn
        }
        const signIn = await onSignin(user);
        this.props.setUser(signIn);
        this.props.history.push('/');
    }

    handleSignUp = async (e) => {
        e.preventDefault();
        if(!this.state.usernameSignUp || !this.state.passwordSignUp) {
            alert('Please enter a valid Username and Password');
            return;
        }
        const user = {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp
        }
        const signUp = await onSignup(user);
        this.props.setUser(signUp);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="login-div">
                    <form onSubmit={this.handleSignIn}>
                        <h2>Sign-in</h2>
                        <label>Name: <input onChange={e => this.handleUsernameSignIn(e)} value={this.state.usernameSignIn}></input></label>
                        <label>Password: <input type="password" onChange={e => this.handlePasswordSignIn(e)} value={this.state.passwordSignIn}></input></label>
                        <button>Submit</button>
                    </form>
                </div>
                <div className="login-div">
                    <form onSubmit={this.handleSignUp}>
                        <h2>Sign-up</h2>
                        <label>Name: <input onChange={e => this.handleUsernameSignUp(e)} value={this.state.usernameSignUp}></input></label>
                        <label>Password: <input type="password" onChange={e => this.handlePasswordSignUp(e)} value={this.state.passwordSignUp}></input></label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

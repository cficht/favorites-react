import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Favorite's List</h1>
                <div>
                    <Link to="/" user={this.props.user}>Search</Link>
                    <Link to="/login" user={this.props.user}>Login</Link>
                    <Link to="/favorites" user={this.props.user}>Favorites</Link>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { searchVideogames } from './favorites-api';

export default class Header extends Component {
    render() {
        return (
            <div id="header-div">
                <img src="videogames.png" alt=""></img>
                <div id="nav-div">
                    <Link to="/" user={this.props.user}>Search</Link>
                    <Link to="/login" user={this.props.user}>Login</Link>
                    <Link to="/favorites" user={this.props.user}>Favorites</Link>
                </div>
            </div>
        )
    }
}

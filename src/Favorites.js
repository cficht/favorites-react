import React, { Component } from 'react';
import List from './List.js';
import { getFavorites, removeFavorites } from './favorites-api.js'
import { Link } from 'react-router-dom';

export default class Favorites extends Component {
    state = {
        videogames: [],
        input: '',
        userName: '', 
        user: {}
    }

    async componentDidMount() {
        const user = this.props.user;
        this.setState({ user: user})
        this.setState({ userName: user.email });
        const data = await getFavorites(user.token);
        this.setState({ videogames: data.body })
    }

    handleRemoveFavorite = async (favoriteId) => {
        console.log(favoriteId)
        await removeFavorites(favoriteId, this.state.user.token);
        const data = await getFavorites(this.state.user.token);
        this.setState({ favorites: data.body })
    }

    render() {
        return (
            <div>
                <Link to="/" user={this.props.user}>Search</Link>
                <Link to="/login" user={this.props.user}>Login</Link>
                <h2>{this.state.userName}</h2>
                <List videogames={this.state.videogames} handleRemoveFavorite={this.handleRemoveFavorite}></List>
            </div>
        )
    }
}

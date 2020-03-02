import React, { Component } from 'react';
import List from './List.js';
import { getFavorites, removeFavorites } from './favorites-api.js'

export default class Favorites extends Component {
    state = {
        favorites: [],
        input: '',
        userName: '', 
        user: {}
    }

    componentDidMount = async () => {
        const user = this.props.user;
        this.setState({ user: user})
        this.setState({ userName: user.email });
        const data = await getFavorites(user.token);
        this.setState({ favorites: data.body })
    }

    handleRemoveFavorite = async (favoriteId) => {
        await removeFavorites(favoriteId, this.state.user.token);
        const data = await getFavorites(this.state.user.token);
        this.setState({ favorites: data.body })
    }

    render() {
        return (
            <div>
                <h2>{this.state.userName}</h2>
                <List videogames={this.state.favorites} handleRemoveFavorite={this.handleRemoveFavorite}></List>
            </div>
        )
    }
}

import React, { Component } from 'react';
import List from './List.js';
import { searchVideogames, addFavorites, getFavorites } from './favorites-api.js';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    state = {
        videogames: [],
        favorites: [],
        input: '',
        loading: false,
        user: {}
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSearch = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = await searchVideogames(this.state.input);
        this.setState({ 
            videogames: data.body.results,
            loading: false
        })
    }

    handleAddFavorite = async (videogame) => {
        const newFavorite = {
            name: videogame.name,
            rating: videogame.rating,
            background_image: videogame.background_image,
            released: videogame.released,
        }
        await addFavorites(newFavorite, this.state.user.token)
        const data = await getFavorites(this.state.user.token);
        this.setState({ favorites: data.body })
    }

    componentDidMount() {
        this.setState({ user: this.props.user});
    }

    render() {
        return (
            <div>
                <Link to="/favorites" user={this.props.user}>Favorites</Link>
                <Link to="/login" user={this.props.user}>Login</Link>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput} value={this.state.input}></input>
                    <button disabled={this.state.loading === true}>Search</button>
                </form>
                {
                    this.state.loading ? "loading!!" : <List videogames={this.state.videogames} user={this.props.user} handleAddFavorite={this.handleAddFavorite} favorites={this.state.favorites}></List>
                }
            </div>
        )
    }
}

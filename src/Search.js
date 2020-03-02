import React, { Component } from 'react';
import List from './List.js';
import { searchVideogames, addFavorites, getFavorites } from './favorites-api.js';

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
        const favorites = await getFavorites(this.state.user.token);
        this.setState({ favorites: favorites.body })
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

    componentDidMount = async () => {
        this.setState({ user: this.props.user});
    }

    render() {
        return (
            <div id="search-div">
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput} value={this.state.input}></input>
                    <button disabled={this.state.loading === true}>Search</button>
                </form>
                {
                    this.state.loading ? <img src="loading.png" alt="" className="App-logo"/> : <List videogames={this.state.videogames} user={this.props.user} handleAddFavorite={this.handleAddFavorite} favorites={this.state.favorites}></List>
                }
            </div>
        )
    }
}

import React, { Component } from 'react';
import List from './List.js';
import { searchVideogames } from './favorites-api.js';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    state = {
        videogames: [],
        input: '',
        loading: false,
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

    componentDidMount() {
        console.log(this.props.user);
    }

    componentDidUpdate() {
        console.log(this.props.user)
    }

    render() {
        return (
            <div>
                <Link to="/favorites" user={this.props.user}>Favorites</Link>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput} value={this.state.input}></input>
                    <button disabled={this.state.loading === true}>Search</button>
                </form>
                {
                    this.state.loading ? "loading!!" : <List videogames={this.state.videogames} user={this.props.user}></List>
                }
            </div>
        )
    }
}

import React, { Component } from 'react';
import List from './List.js';
import { searchVideogames } from './favorites-api.js';

export default class Search extends Component {
    state = {
        videogames: [],
        input: ''
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSearch = async () => {
        const data = await searchVideogames(this.state.input);
        this.setState({ videogames: data.body.results })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} value={this.state.input}></input>
                <button onClick={this.handleSearch}>Search</button>
                <List videogames={this.state.videogames}></List>
            </div>
        )
    }
}

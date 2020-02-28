import React, { Component } from 'react';
import List from './List.js';
import { getFavorites } from './favorites-api.js'

export default class Favorites extends Component {
    state = {
        videogames: [],
        input: '',
        userName: '' 
    }

    async componentDidMount() {
        const user = this.props.user;
        this.setState({ userName: user.email });
        console.log(user)
        const data = await getFavorites(user.token);
        this.setState({ videogames: data.body })
    }

    render() {
        return (
            <div>
                <h2>{this.state.userName}</h2>
                <List videogames={this.state.videogames}></List>
            </div>
        )
    }
}

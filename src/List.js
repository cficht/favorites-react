import React, { Component } from 'react';
import Item from './Item.js';

export default class List extends Component {
    render() {
        const gameNodes = this.props.videogames.map(videogame => <Item videogame={videogame} favorites={this.props.favorites} handleAddFavorite={this.props.handleAddFavorite} handleRemoveFavorite={this.props.handleRemoveFavorite}></Item>)
        return (
            <div>
                <ul className="list-ul">
                    {gameNodes}
                </ul>
            </div>
        )
    }
}
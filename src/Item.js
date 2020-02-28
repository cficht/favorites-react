import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class Item extends Component {
    render() {
        return (
            <li className="list-item">
                <h3>{this.props.videogame.name}</h3>
                <p>{this.props.videogame.rating}</p>
                <img src={this.props.videogame.background_image} alt=""/>
                <p>{Date(this.props.videogame.released)}</p>
            </li>
        )
    }
})

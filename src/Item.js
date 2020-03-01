import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class Item extends Component {

    componentDidMount() {
        // console.log(this.props.location)
    }

    renderFaveButton() {
        if(this.props.location.pathname !== '/favorites') {
            console.log(this.props.location.pathname)
            return <button onClick={e => this.props.handleAddFavorite(this.props.videogame)}>Add Favorite</button>;
        } else if(this.props.location.pathname === '/favorites') {
            return <button onClick={e => this.props.handleRemoveFavorite(this.props.videogame.id)}>Remove Favorite</button>;
        }
        
    }

    render() {
        return (
            <li className="list-item">
                <h3>{this.props.videogame.name}</h3>
                <p>{this.props.videogame.rating}</p>
                <img src={this.props.videogame.background_image} alt=""/>
                <p>{Date(this.props.videogame.released)}</p>
                {this.renderFaveButton()}
                
            </li>
        )
    }
})

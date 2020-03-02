import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class Item extends Component {
    state = {
        convertDate: ''
    }

    componentDidMount = () => {
        if(this.props.videogame.released) {
            const date = (this.props.videogame.released).split('-');
        const dateFormat = `${date[1]}/${date[2]}/${date[0]}`
        this.setState({ convertDate: dateFormat})
        }
    }

    renderFaveButton() {
        if(this.props.location.pathname !== '/favorites') {
            const alreadyFave = this.props.favorites.find(favorite => favorite.name === this.props.videogame.name);
            if(!alreadyFave){
                return <button onClick={e => this.props.handleAddFavorite(this.props.videogame)}>Add Favorite</button>;
            } else {
                return <img src="star.png" alt="" className="fave-icon"/>;
            }
        } else if(this.props.location.pathname === '/favorites') {
            return <button onClick={e => this.props.handleRemoveFavorite(this.props.videogame.id)}>Remove Favorite</button>;
        } 
    }

    render() {
        return (
            <li className="list-item">
                <h3><span className="bold-text">{this.props.videogame.name}</span></h3>
                <p><span className="bold-text">Rating: </span>{this.props.videogame.rating}</p>
                <img src={this.props.videogame.background_image} alt="" className="game-img"/>
                <p><span className="bold-text">Release Date: </span>{this.state.convertDate}</p>
                {this.renderFaveButton()}
            </li>
        )
    }
})
import React, { Component } from 'react';
class Menu extends Component {

    render() {
        return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Favorites</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-btn">
                
            </li>
            </ul>
            <div className="form-inline">
                
                <button className="btn btn-outline-info" type="submit">Sign in</button>

            </div>
        </div>
    </nav>
        );
    }
}

export default Menu;
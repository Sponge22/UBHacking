import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default class Navbar extends Component {

    render() {
        return (
            <div className='nav'>
                <Link to='/' className='nav-link' id='logo'>Split</Link>
                <div className='nav_right'> 
                    <Link to='/friends' className='nav-link'> Friends </Link>
                    <Link to='/split' className='nav-link'> Split Request </Link>
                    <Link to='/profile' className='nav-link'> Profile </Link>
                </div>                
            </div>
        )
    }
}

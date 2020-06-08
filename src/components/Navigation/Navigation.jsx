import React from 'react'
import './Navigation.css';

function Navigation() {
    return <nav className="row">
        <div className="nav-logo">
            <h1>Tørque</h1>
        </div>
        <div className="nav">
            <a href="/projects">PROJECTS</a>
            <a href="/ideas">IDEAS</a>
            <a href="/login">LOGIN</a>
            <a href="/register">REGISTER</a>
        </div>
    </nav>;
}

export default Navigation;
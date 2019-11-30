import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li className="navLink">
                        <a href="/manager">Park Manager</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavBar

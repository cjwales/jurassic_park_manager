import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (

    <ul>
    <li className="navLink">
    <Link to="/dinosaurs">Dinosaurs</Link>
    </li>

    <li className="navLink">
    <Link to="/paddocks">Paddocks</Link>
    </li>

    <li className="navLink">
    <Link to="/dinosaurs/new">Add Dinosaur</Link>
    </li>

    <li className="navLink">
    <Link to="/dinosaurs/:id">Find Dinosaur</Link>
    </li>

    <li className="navLink">
    <Link to="/paddocks/new">Add Paddock</Link>
    </li>

    <li className="navLink">
    <Link to="/paddocks/:id">Find Paddock</Link>
    </li>

    </ul>
  )
}

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink exact to={"/dog/random"}>Random Dog</NavLink>
            <NavLink to={"/dog/random/5"}>Random Dogs</NavLink>
            {/* <NavLink to={"/dog/:breed"}>Dog Breed</NavLink>
            <NavLink to={"/cat/random"}>Random Cat</NavLink>
            <NavLink to={"/cat/random/:num"}>Random Cats</NavLink>  */}
        </nav>
    )
}

export default NavBar;
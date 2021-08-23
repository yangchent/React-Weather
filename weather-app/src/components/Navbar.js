import React from "react";
import {Link  } from "react-router-dom"; 

const Navbar = ()=> {

    return (
        <nav className="App-header">
            <Link to='/' className="App-link">Home</Link>
            <Link to='/Favorites' className="App-link" >Favorites</Link>
        </nav> 
        
    )
}
export default Navbar;
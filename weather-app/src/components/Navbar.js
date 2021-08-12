import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "../veiws/Home";
import Favorites from "../veiws/Favorites";
import React from "react";

const Navbar = ()=> {
    return <BrowserRouter>
        <navBar className="App-header">
            <Link to='/' className="App-link">Home</Link>
            <Link to='/Favorites' className="App-link" >Favorites</Link>
        </navBar> 
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Favorites" component={Favorites}></Route>
        </Switch>
    </BrowserRouter>

}
export default Navbar;
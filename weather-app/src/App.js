import React,{createContext, useState} from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./veiws/Home";
import Favorites from "./veiws/Favorites";

const App = ()=> {

return (
    <BrowserRouter>
            <Link to='/' >Home</Link>
            <Link to='/Favorites' >Favorites</Link>
        <Switch>
            <Route exact path="/" >{Home}  </Route>
            <Route path="/Favorite"> {Favorites}</Route>
        </Switch>
  </BrowserRouter>

)
}
export default App;
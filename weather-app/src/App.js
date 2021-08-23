import { BrowserRouter, Switch, Route, } from "react-router-dom"; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import { createContext, useState } from "react";
export const mainContext = createContext([]);

const App = ()=> {
    const [cityList, setCityList]= useState([]);

return (
            <BrowserRouter>
            <mainContext.Provider value={{ cityList, setCityList }}>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Favorites" component={Favorites}></Route>
                </Switch>
                </mainContext.Provider>
                           <Footer />
            </BrowserRouter>

)
}
export default App;
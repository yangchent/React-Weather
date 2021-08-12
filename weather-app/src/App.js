import React,{createContext, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./veiws/Home";
export const mainContext = createContext();

const App = ()=> {

return <mainContext.Provider>
            <Navbar />
            
            <Footer />
    </mainContext.Provider>
}
export default App;
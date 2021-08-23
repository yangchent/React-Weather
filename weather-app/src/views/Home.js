import getWeather from "./Api";
import React,{ useContext, useState, } from "react";
import {mainContext} from '../App';


const Home= ()=> {
 
    const [stateName, setStateName] = useState("");
    const [cityTemp, setCityTemp]= useState({});
    const {cityList, setCityList}= useContext(mainContext);

        const handleClick = async(e)=>{
                e.preventDefault();
            const data= await getWeather(stateName)
            setCityTemp(data) 
        }
        const setFavorite = () => {
            if(cityList){
              if ( cityList.length <3){
                setCityList([...cityList,cityTemp])
                console.log("setFavorite")
              } 
            }
        }
        console.log(cityList)
       return (
                <div className="container">
                    <h1>Type a city name to see the weather</h1>
                    <form >
                        <input type="text" value={stateName} onChange={(e) => setStateName(e.target.value)}/>
                        <input type="submit" value="Submit" onClick={handleClick}/>
                    </form>

                        <h2>City Name: {cityTemp.name}</h2>
                        <p>Temperature: {cityTemp.main? cityTemp.main.temp : null}</p>
                        <button onClick={setFavorite}>Add 2 Fav</button>
                </div> 
               
        
    )
}
export default  Home;
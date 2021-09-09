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
              if ( cityList.length <= 2){
                setCityList([...cityList,cityTemp])
                console.log("setFavorite")
              } 
              else { 
                  return null;
              }
            }
        }
        console.log(cityList)
       return (
                <div className="container">
                    <div className="mainDiv">
                        <h1>Type a city name to see the weather</h1>
                    <form >
                        <input type="text" value={stateName} onChange={(e) => setStateName(e.target.value)} />
                        {'\n'}
                        <input type="submit" value="Submit" onClick={handleClick} className= "button"/>
                    </form>

                        <h2>City Name: {cityTemp.name}</h2>
                        <h3>Temperature: {cityTemp.main? cityTemp.main.temp : null}</h3>
                        <button onClick={setFavorite} className="button">Click to add to favourite</button>
                    </div>
                </div> 
               
        
    )
}
export default  Home;
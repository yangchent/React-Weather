import React,{useContext } from "react";
import {mainContext} from '../App';
import '../App.css';

const CityCard= ()=> {

    const {cityList} = useContext(mainContext);
    
      return ( 
          <div className="card">
                {cityList.map((cityTemp, index) => 
                   (<div key={index} className="cardContainer">
                    <p>City : {cityTemp.name}</p>
                    <p>Temperature : {cityTemp.main ? cityTemp.main.temp : null}</p>
                </div>)
             )}
             </div>
    
         )
}
export default  CityCard;
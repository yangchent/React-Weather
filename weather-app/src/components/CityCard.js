import React,{useContext } from "react";
import {mainContext} from '../App';

const CityCard= ()=> {

    const {cityList} = useContext(mainContext);
    
      return ( 
          <>
                {cityList.map((cityTemp, index) => 
                   (<div key={index}>
                    <p>City : {cityTemp.name}</p>
                    <p>Temperature : {cityTemp.main ? cityTemp.main.temp : null}</p>
                </div>)
             )}
             </>
         )
}
export default  CityCard;
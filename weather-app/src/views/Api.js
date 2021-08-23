import React from "react";

 
 const getWeather = async(cityName) => {

       const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fe34ca84af8fb9fb507b71a4e864964`)
         const data = await response.json();
         console.log(data)
         return data
         
    };

export default getWeather;
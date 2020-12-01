import React, { useState, useEffect } from 'react'
import axios from 'axios'

const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.REACT_APP_API_KEY
console.log("api",dotenv)

const GetWeatherData = (props) => {
    const [ weather, setWeather ] = useState([])

    console.log("http://api.weatherstack.com/current?access_key="+api_key+"&query="+props.location)
    useEffect(()=>{
      console.log("getting weather")
    axios
    .get("http://api.weatherstack.com/current?access_key="+api_key+"&query="+props.location)
    .then(response => {
        console.log("weather fulfilled")
        setWeather([response.data])
        console.log("weather",weather)
    }) })
    console.log("weather",weather)
    
    return(
        
        weather.map(i => <div key = {i.location.name}>
        <h2>Wather in {i.location.name}</h2>
        <b>temperature:</b>
        {i.current.temperature}
        <b>wind:</b>
        {i.current.windspeed}
        </div>
        )
        
    )
}

export default GetWeatherData
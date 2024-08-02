import { useState, useEffect } from "react"
import WeatherIcon from "../WeatherIcon"
import { WiRaindrop } from "../../../node_modules/react-icons/wi"
import weatherTypes from "../API/data/weather-types.json"

export default function Card(props) {
     const [weatherType, setWeatherType] = useState({}) 
     const [weatherIcon, setWeatherIcon] = useState({})
     const weather = weatherTypes

     useEffect(() => {
          fetch(`https://api.ipma.pt/open-data/weather-type-classe.json`)
          .then(res => res.json())
          .then(data => setWeatherType(data.data.filter(w =>
                         w.idWeatherType === props.value.idWeatherType)[0]
                    ))
     }, [props]) 

     useEffect(() => {
          setWeatherIcon(weather.filter(w =>
               w.idWeatherType === props.value.idWeatherType)[0]
          )
     }, [props]) 

     return (
          <div className="card">
               <div><WeatherIcon value={weatherIcon}/></div>
               <p>{props.value.forecastDate}</p>
               <p className="pt">{weatherType.descWeatherTypePT}</p>
               <p className="en">{weatherType.descWeatherTypeEN}</p>
               <p>{props.value.tMin}º - {props.value.tMax}º</p>
               <p><WiRaindrop/> {props.value.precipitaProb}<span className="smaller">%</span></p>
          </div>
     )
}

//searchbar
//drop icon
//date format
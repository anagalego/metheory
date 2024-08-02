import React from "react"
import * as Weather from "../../node_modules/react-icons/wi"

export default function WeatherIcon(props) {
     return (
          <div className="weather-icon">
               {props.value.icon && React.createElement(Weather[props.value.icon], { size:48 })}
          </div>
     )
}
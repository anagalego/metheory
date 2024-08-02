import { useState, useEffect } from "react"
import Element from "../API/Element"
//To delete after
import mockHourly from "../API/data/mock-hourly.json"
import mockDaily from "../API/data/mock-hourly.json"

export default function Diagram(props) {
     const [time, setTime] = useState(props && props.time)
     const [temperature, setTemperature] = useState(props && props.temperature)
     const [precipitation, setPrecipitation] = useState(props && props.precipitation)
     const [code, setCode] = useState(props && props.code)

     const [elements, setElements] = useState([])

     const defineElements = () => {
          if(props.type === "day") {
               var arr = []
               while (arr.length < 12) {
                    var day = []
                    while (day.length < 24) {
                         var hour = {
                              time: setTime(time.shift()),
                              temperature: setTemperature(temperature.shift()),
                              precipitation: setPrecipitation(precipitation.shift()),
                              code: setCode(code.shift())
                         }
                         console.log("Hou", hour)
                         day.push(hour)
                    }
                    arr.push(day)
               }
          }
     }

     const mockElements = (type) => {
          if(type === "day") {
               var arr = []
               while (arr.length < 12) {
                    var day = []
                    while (day.length < 24) {
                         var timeAtt = mockH?.time?.shift()
                         var temperatureAtt = mockH?.temperature?.shift()
                         var precipitationAtt = mockH?.precipitation?.shift()
                         var codeAtt = mockH?.code?.shift()
                         var hour = {
                              time: timeAtt,
                              temperature: temperatureAtt,
                              precipitation: precipitationAtt,
                              code: codeAtt
                         }
                         day.push(hour)
                    }
                    arr.push(day)
               }
               setElements(arr)
               console.log(arr)
          }
               
          else {
               console.log("Else")
               //setElements(mockDaily)
          }     
     }

     useEffect(function() {
          defineElements()
          console.log("PROPS DIAGRAM", props.hourly)
          //mockElements("day")
     }, [props])

     return (
          <div className="diagram">
               Diagrama
               {elements.length > 0 && (
                    elements.map((value, index) => (
                    <Element
                         key={index}
                         value={value}
                    />
                    ))
               )}
          </div>
     )
}


//searchbar
//drop icon
//date format

/*
elements
[
     12
     [
          24
          {
               time
               temperature
               precipitation
               code
          }
     ]
]




*/
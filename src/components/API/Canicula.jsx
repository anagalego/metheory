import { useEffect, useState } from "react"
import Diagram from "./Diagram"

export default function Canicula() {
    //open-meteo queries
    //latitude e longitude São Bartolomeu de Messines - aplicar também a atual
    const [latitude, setLatitude] = useState("37.26")
    const [longitude, setLongitude] = useState("-8.29")

    //canicula
    const [caniculaStart, setCaniculaStart] = useState("2012-08-02")
    const [caniculaEnd, setCaniculaEnd] = useState("2012-08-13")

    //canicular
    const [canicularStart, setCanicularStart] = useState("2012-08-14")
    const [canicularEnd, setCanicularEnd] = useState("2012-08-25")

    //year
    const [yearStart, setYearStart] = useState("2013-01-01")
    const [yearEnd, setYearEnd] = useState("2013-12-31")

    //hourly
    const [hourly, setHourly] = useState("temperature_2m,precipitation,weather_code")
    const [daily, setDaily] = useState("weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum")

    const [caniculaData, setCaniculaData] = useState()
    const [canicularData, setCanicularData] = useState({})
    const [yearData, setYearData] = useState({})

    // const loadData = () => {
    //     fetch(`https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${caniculaStart}&end_date=${caniculaEnd}&hourly=${hourly}`)
    //     .then(res => res.json())
    //     .then(data => setCaniculaData(data?.hourly)) 
    // }


    useEffect(() => {
        fetch(`https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${caniculaStart}&end_date=${caniculaEnd}&hourly=${hourly}`)
        .then(res => res.json())
        .then(data => setCaniculaData(data.hourly))
        .catch (e => console.log("ERRO OPEN-METEO", e))
        
    }, [])  

    return (
        <>
            {caniculaData && (
                <Diagram 
                    time={caniculaData.time}
                    temperature={caniculaData.temperature_2m}
                    precipitation={caniculaData.precipitation}
                    code={caniculaData.weather_code}
                    type="day"
                />
            )}
        </>  
    )
}




/*

            

        fetch(`https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${canicularStart}&end_date=${canicularEnd}&hourly=${hourly}`)
        .then(res => res.json())
        .then(data => setCanicularData(data?.hourly)) 
        
        fetch(`https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${yearStart}&end_date=${yearEnd}&daily=${daily}`)
        .then(res => res.json())
        .then(data => setYearData(data?.daily)) 



function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}
*/
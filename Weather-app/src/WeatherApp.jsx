import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Ajmer",
        feelslike : 27.11,
        temp : 28.25,
        tempMin : 28.25,
        tempMax : 28.25,
        humidity : 26,
        pressure : 1007,
        weather : "overcast cloud"
    })

    

    return (
        <>
           <SearchBox /> 
           <InfoBox info={weatherInfo} />
        </>
    )
}
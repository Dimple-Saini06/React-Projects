import { useState } from 'react'
import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox() {
    let[city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "65267cd0f303aa1312606bad6d394581";

    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            pressure : jsonResponse.main.pressure,
            humidity : jsonResponse.main.humidity,
            feelLike : jsonResponse.main.feels_like, 
            weather : jsonResponse.weather[0].description

        }

        console.log(result);
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
        
    }
    return (
        <div className='SearchBox'>
            <h3>
                Search for the weather
            </h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}  
                    onChange={handleChange} 
                required />

                <br></br><br></br>
                
                <Button variant="contained" type="submit" size="large">
                    Search
                </Button>
            </form>
        </div>
    )
}
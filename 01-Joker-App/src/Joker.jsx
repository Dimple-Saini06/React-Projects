import { useState, useEffect } from 'react';
import './Joker.css'
export default function Joker(){
    const url = "https://official-joke-api.appspot.com/random_joke";
    let[joke, setJoke] = useState({});

    
    async function createJoke() {
        let response = await axios.get(url);
        setJoke(response.data);
        console.log(response.data.setup);
        console.log(response.data.punchline);
    }

    useEffect(()=>{(
        async function getFirstJoke(){
            let response = await axios.get(url);
            setJoke(response.data);
        })
        ()},
        []
    )

    return (
        <div>
            <h3>JOKES FOR YOU!</h3>
            <div className='jokeDiv'>
                <h2>{joke.setup}</h2>
                <p>{joke.punchline}</p>
            </div>
            
            <br></br>
            <button onClick={createJoke} className='btn'>NEW JOKE</button>
        </div>
    )
}
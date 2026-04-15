import { useState, useEffect } from "react";
export default function Count() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let updateCountx = ()=>{
        setCountx(countx+1);
    }

    let updateCounty = ()=>{
        setCounty(county+1);
    }

    useEffect(function print(){
        console.log("side-effect");
    },[countx])
    
    return (
        <>
        <p>countx = {countx}</p>
        <button onClick={updateCountx}>+1</button>
        <p>county = {county}</p>
        <button onClick={updateCounty}>+1</button>
        </>
    )
}
import axios from 'axios';
import { elementType } from 'prop-types';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Styles from "./FinalMock.module.css"

const FinalMock = () => {
  let [place,setPlace]=useState("")
  let [details,setDetails]=useState({})
  let [some,setSome]=useState({
      pla:"",
      temp:"",
      humi:"",
      weather:""
      })
  useEffect(()=>{
    let fetchData=async ()=>{
        let {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5396dc24488bdf9745431426bbecfcda`)
        setDetails(data)
        console.log(data)
    }
    fetchData()

},[place])
  let handleWeather=(e)=>{
    setPlace(e.target.value)

  }
  let{pla,temp,humi,weather}=some
  let submitWeather=(e)=>{
    e.preventDefault()
    // console.log(e)
    setSome({
      pla:details.name,
      temp:Math.floor(details.main.temp_max-273),
      humi:details.main.humidity,
      weather:details.weather[0].description
    })
    setPlace("")
  }
  return (
    <>   
        <h1 id={Styles.heading}>Weather Report</h1>
     <div id={Styles.sub}>
        <form onSubmit={submitWeather}>
            <input type="text"  value={place} onChange={handleWeather} id={Styles.inp} placeholder='Enter Location' />
            <button id={Styles.btn}><FaSearch /></button>
        </form>
        <br />
        <h1>Place:{pla}</h1>
        <br />
        <h1>Temperature:{temp}℃</h1>
        <br />
        <h1>Humidity:{humi}</h1>
        <br />
        <h1>Weather Condition:{weather}</h1>

      </div>
    </>


  )
}

export default FinalMock

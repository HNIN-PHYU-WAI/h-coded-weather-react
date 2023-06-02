import React,{useState} from "react";
import axios from "axios";

import "./weather.css";

export default function Weather(){
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState({loaded:false});

  function showWeather(response){
    console.log(response.data);
    setWeather({
      loaded:true,
      temperature:response.data.temp,
    })
  }
  function Search(){
    const key = "09ab3fdfc4a9o862fa2fea44052tffba";
    const unit="metric";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    Search();
  }
  function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);
  }
  const Form = (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input type="search"
          placeholder="🔎Search a city...."
          className="form-control"
          onChange={updateCity}/>
        </div>
        <div className="col-3">
          <input type="submit"
          className="btn btn-danger"/>
        </div>
      </div>
    </form>
  );
  if (weather.loaded){
    return(
    <div>
      {Form}
    </div>
  );
  }else{
    Search();
    return(
      <div>loading....</div>
    )
  }
  
}
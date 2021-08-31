import React, {useState} from 'react'
import {Fetchdata} from './api/Fetchdata'
import './App.css';

function App() {
   const [query, setquery] = useState('')
   const [weather, setWeather] = useState({});
   const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await Fetchdata(query);
         setWeather(data);
         setquery('')
      
    }
}
  return (
    <div className="main-container">
      <h1 className="amaan">WHEATHER   IN...</h1>
    <input
      type="text"
      className="search"
      placeholder="Enter the location..."
      value={query}
      onChange={(e) => setquery(e.target.value) }
      onKeyPress={search}

    
    
    ></input>
      {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
    
    </div>
  );
}

export default App;

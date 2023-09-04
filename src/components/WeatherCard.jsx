import { useState } from "react";



const WeatherCard = ({weather,temp}) => {

console.log(weather);

const [isCelsius, setisCelsius] = useState()
const handlechangeTemp = () => setisCelsius(!isCelsius)
  return (
    <article className="container_body">
      <h1 className="container_title">Weather App</h1>
      <h2 className="container_caption">{weather?.name},{weather?.sys.country}</h2>
      <div className="container_seasons">
        <img 
  className="container_img"
        src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="" />
        <section className="container_weather">
         <h3 className="container">{weather?.weather[0].description}</h3>

         <ul >
          <li><span>Wind Speed</span><span>{weather?.wind.speed}</span></li>
          <li><span>Clouds</span><span>{weather?.clouds.all}%</span></li>
          <li><span>Pressure</span><span>{weather?.main.pressure}hPa</span></li>
         </ul>
      </section>
      </div>
      <div className="container_buttons">
      <h2 className="container_caption2">{isCelsius? `${ temp?.celsius}°c`: `${temp?.farenheit}°f`}</h2>
      <button className="container-button" onClick={handlechangeTemp}>{isCelsius ?'Change to °F': 'change to °C'} </button>
      </div>
    </article>
  )
}

export default WeatherCard
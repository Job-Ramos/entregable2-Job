
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setcoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const succcess = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setcoords(obj)
    }

    navigator.geolocation.getCurrentPosition(succcess)

  }, [])

  useEffect(() => {
    if (coords) {
      const Apikey = '67f2bf901de3643e9685de7c7d98b9ee'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${Apikey}`
      axios
        .get(url)
        .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
        }

        setTemp(obj)
      })
        .catch((err) => console.log(err));
    }}, [coords])

  console.log(weather);

  return (
    <div className='cont_button'>
      <WeatherCard
        weather={weather} temp={temp} />
    </div>
  )
}

export default App

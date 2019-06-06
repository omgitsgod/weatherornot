import React, {useState, useEffect} from 'react';
import './App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Sidebar'
import Current from './Current'
import Week from './Week'
import Hourly from './Hourly'
import Map from './Map'

function App() {
  const [results, setResults] = useState({})
  let lat, long
  const handleCoords = (coords) => {
    console.log(coords.coords.latitude,coords.coords.longitude);
    lat = coords.coords.latitude
    long = coords.coords.longitude
  }
  navigator.geolocation.getCurrentPosition(handleCoords)
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API_KEY}/${lat || 42.3601},${long || -71.0589}`)
    .then(r => r.json()).then(result => {
      setResults(result)

    })
  }, [])
  console.log(results);
  return (
    <header className="Section-header">
      <Sidebar />
      <Route exact path="/" render={(props)=><Home {...props} daily={results.daily}/>}/>
      <Route exact path="/current" render={(props)=><Current {...props} currently={results.currently}/>}/>
      <Route exact path="/hourly" render={(props)=><Hourly {...props} hourly={results.hourly}/>}/>
      <Route exact path="/week" component={Week} />
      <Route exact path ="/map" component={Map} />
    </header>
  )
}


export default App;

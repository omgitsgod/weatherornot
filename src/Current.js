import React from 'react';
import './css/Current.css';
import ReactAnimatedWeather from 'react-animated-weather';

function Currently(props) {
  let icon
  if (props.currently) {
    switch(props.currently.icon) {
      case 'clear-day':
      icon='CLEAR_DAY'
      break
      case 'clear-night':
      icon='CLEAR_NIGHT'
      break
      case 'partly-cloudy-day':
      icon='PARTLY_CLOUDY_DAY'
      break
      case 'partly-cloudy-night':
      icon='PARTLY_CLOUDY_NIGHT'
      break
      case 'cloudy':
      icon='CLOUDY'
      break
      case 'rain':
      icon='RAIN'
      break
      case 'sleet':
      icon='SLEET'
      break
      case 'snow':
      icon='SNOW'
      break
      case 'wind':
      icon='WIND'
      break
      case 'fog':
      icon='FOG'
      break
      default:
      icon = 'CLEAR_DAY'
      break
    }

  }

  const defaults = {
  icon: icon,
  color: '#61dafb',
  size: 100,
  animate: true
};


  if (props.currently) {
  return (

    <div className="Section">
      <div className="Section-div">


        <div className="boxy-current">
        <div className="inner">
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <br />
        <h2>{props.currently.temperature}° F</h2>
        <h3>{props.currently.summary}</h3>
        <h3>Cloud Cover: {Math.floor(props.currently.cloudCover * 100)}%</h3>
        <h3>humidity: {Math.floor(props.currently.humidity * 100)}%</h3>
        <h3>Storm Distance: {props.currently.nearestStormDistance} miles away</h3>
        </div>
        </div>
      </div>
    </div>
  );
} else {
  return (
    <p>loading...</p>
  )
}
}

export default Currently;

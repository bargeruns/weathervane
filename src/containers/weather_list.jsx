import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/map.jsx';

export class WeatherList extends Component {

  render() {
    return (
      <div>{this.props.weather.map(this.renderWeather)}</div>
    );
  }

  renderWeather({ city, list }) {
    const { lat, lon } = city.coord;
    const name = city.name;
    const temp = list.map(weather => weather.main.temp);
    const pressure = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);

    return (
      <div className='city-container' key={name}>
        <p className="title">{name}</p>
        <div className='city-row'>
          <GoogleMap lat={lat} lon={lon}/>
          <div className='city-data'>
            <Chart data={temp} color='red' unit={'\u2109'}/>
          </div>
          <div className='city-data'>
            <Chart data={humidity} color='blue' unit='%'/>
          </div>
          <div className='city-data'>
            <Chart data={pressure} color='gray' unit='hPa'/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

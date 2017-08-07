import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/map.jsx';

export class WeatherList extends Component {

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }

  renderWeather({ city, list }) {
    const { lat, lon } = city.coord;
    const name = city.name;
    const temp = list.map(weather => weather.main.temp);
    const pressure = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon}/>
          {name}
        </td>
        <td>
          <Chart data={temp} color='red' unit={'\u2109'}/>
        </td>
        <td>
          <Chart data={humidity} color='blue' unit='%'/>
        </td>
        <td>
          <Chart data={pressure} color='gray' unit='hPa'/>
        </td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

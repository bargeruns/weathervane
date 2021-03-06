import React, { Component } from 'react';

import SearchBar from '../containers/search_bar.jsx';
import WeatherList from '../containers/weather_list.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="/"><i className="fa fa-tint"></i> WeatherVane</a>
          <div className="nav-item">
            <a className="nav-link" href="https://github.com/bargeruns/weathervane"><i className="fa fa-github fa-2x"></i> View on GitHub</a>
          </div>
        </nav>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

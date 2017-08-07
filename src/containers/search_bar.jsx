import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';
import ReducerWeather from '../reducers/reducer_weather.js';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

      // bind context to our component's callbacks
      // do this instead of using arrow functions as props in the JSX, so that new functions aren't instantiated in memory
      // every time someone uses the component.
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form action="" className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          type="text"
          value={this.state.searchTerm}
          placeholder="Get a 5-day forecast in your favorite cities!"
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit" >Submit</button>
        </span>
      </form>
    );
  }
}

// make our action(s) available as props in our component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

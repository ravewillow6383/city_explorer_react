import React, {Fragment, Component} from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js'
import Map from './map.js';
import Result from './search-results.js';

import superagent from 'superagent'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        search_query: '',
        formatted_query: '',
        latitude: '',
        longitude: ''
      },

      forecasts:[],
      movies: [],
      events: [],
      reviews: [],
      trails: []
    };
  }

  searchEntered = async query => {
    query.preventDefault();
    const url = 'https://city-explorer-backend.herokuapp.com'
    let dataQuery = await superagent.get(`${url}/location?data=${query}`);

    const location = {
      search_query: dataQuery.body.search_query,
      formatted_query: dataQuery.body.formatted_query,
      latitude: dataQuery.body.latitude,
      longitude: dataQuery.body.longitude
    }

    const queryString = `data[formatted_query]=${location.formatted_query}$data[latitude]=${location.latitude}$data[longitude]=${location.longitude}`;

    const forecast = await superagent.get(`${url}/weather?${queryString}`);

    const movies = await superagent.get(`${url}/movies?${queryString}`);

    const yelp = await superagent.get(`${url}/yelp?${queryString}`);

    const trails = await superagent.get(`${url}/trails?${queryString}`);

    const events = await superagent.get(`${url}/events?${queryString}`);

    this.setState({
      location,
      forecast : forecast.body,
      movies : movies.body,
      yelp : yelp.body,
      trails : trails.body,
      events : events.body

    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchForm handleSubmit={this.searchEntered}/>
        {this.state.location && (
        <>
          <Map />
        </>
        )}
        <SearchResults />
        <Main />
      </Fragment>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Fragment>
    );
  }
}





export default App;
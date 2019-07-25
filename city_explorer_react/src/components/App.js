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
      }
    };
  }

  searchEntered = async query => {
    query.preventDefault();
    // fetch`https://city-explorer-backend.herokuapp.com/location?data=${query}`
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   let location = data.results.map((city) => {
    //     return<div key={city.results}>
    //       search_query: query,
    //       formatted_query: data_query.formatted_query,
    //       latitude: data_query.latitude,
    //       longitude: data_query.longitude
    //     </div>
    //   })
    // })
    let data_query = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${query}`);
    await this.setState({
      location: {
        search_query: query,
        formatted_query: data_query.body.formatted_query,
        latitude: data_query.body.latitude,
        longitude: data_query.body.longitude
      }
    });
    
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchForm handleSubmit={this.searchEntered}/>
        <Map />
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
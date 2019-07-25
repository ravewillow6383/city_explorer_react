import React, {Fragment, Component} from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js'
import Map from './map.js';
import superagent from 'superagent'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
  }

  searchEntered = async query => {
    query.preventDefault();
    let data_query = await superagent.get('')
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchForm  handleSubmit={this.searchEntered}/>
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

class Result extends Component {
  render(){
    return(
      <Fragment>
      <section>Yelp, EventBrite, Movies, weather, hiking! </section>
      </Fragment>
    )
  }
}



export default App;
import React, {Fragment, Component} from 'react';
// import Form from '/Users/ravew/projects/codefellows/401/city_explorer_react/city_explorer_react/src/form'

class Header extends Component {
  render() {
    return (
    <Fragment>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </Fragment>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Explore!</h1>
        {/* <Form /> */}
        <Header />
        <Main />
      </Fragment>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Fragment>
    );
  }
}

class Search extends Component {
  render(){
    return(
      <Fragment>
        <input></input>
        <button>Explore!</button>
      </Fragment>
    )
  }
}

class Map extends Component {
  render(){
    return(
      <Fragment>
        <map></map>
      </Fragment>
    )
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
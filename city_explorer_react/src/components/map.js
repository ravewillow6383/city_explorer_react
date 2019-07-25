import React, { Fragment, Component } from 'react';

class Map extends Component {
    render(){
      return(
        <Fragment>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.location.latitude}%2c%20${this.state.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCJPXoebcN6HttkJ-sUdKUXuyL5YtetDAA`} alt="Map of search query." />
        </Fragment>
      )
    }
  }
  
export default Map
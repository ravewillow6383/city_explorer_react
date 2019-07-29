import React, { Fragment, Component } from 'react'


class Header extends Component {
    render() {
      return (
      <Fragment>
        <link href="https://fonts.googleapis.com/css?family=Cabin&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Bungee+Outline&display=swap" rel="stylesheet"></link>
        <h1 className='title'>City Explorer</h1>
        <p className='enter'>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </Fragment>
      );
    }
  }

export default Header
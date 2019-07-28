import React from 'react';
import Events from '/events.js'
import Movies from '.movies.js'
import Forecasts from './forecasts.js'
import Yelp from './yelp.js'
import Trails from '.trails.js'

export default props => (
    <>
        <Forecasts data={props.forecasts} />
        <Events data={props.events} />
        <Movies data={props.movies} />
        <Yelp data={props.yelp} />
        <Trails data={props.trails} />

    </>
)
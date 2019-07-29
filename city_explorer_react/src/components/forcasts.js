import React from 'react';

export default props => (
  <div>
    <h2>Forecasts</h2>
    <ul>
      {props.data.map(weather => (
        <li key={weather.time}>{weather.forecast}</li>
      ))}
    </ul>
  </div>
)
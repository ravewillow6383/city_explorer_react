import React from 'react';

export default props => (
  <div>
    <h2>Yelp Reviews</h2>
    <ul>
      {props.data.map(yelp => (
        <li key={yelp.image_url}>{yelp}</li>
      ))}
    </ul>
  </div>
)
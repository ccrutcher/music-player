import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <div id='welcome'>Welcome to My Tunes!</div>
    <div id='landing-content'>
      Only My Tunes has the hottest jams.
      Click below to access the library!
    </div>
    <button className='library-btn'>
      <Link to='/library'>Library</Link>
    </button>
  </div>
);

export default Landing;

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <div id='welcome'>Welcome to My Tunes!</div>
    <div id='landing-content'>
      This Single Page Application was created as an excercise to experiment
      with React and create a music player in the process. Click below to access
      the library!
    </div>
    <button className='library-btn'>
      <Link to='/library'>Library</Link>
    </button>
  </div>
);

export default Landing;

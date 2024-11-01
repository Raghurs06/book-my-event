import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/book-my-event">
        <button className='btn btn-primary'>Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

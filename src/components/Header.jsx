import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <span role="img" aria-label="alarm">
          🚨
      </span>
        {' '}Alarm Viewer{' '}
        <span role="img" aria-label="alarm">
          🚨
      </span>
      </h1>
    </header>
  )
}

export default Header;
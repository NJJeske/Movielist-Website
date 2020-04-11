import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
  return (
      <Tilt className="Tilt br1 shadow-2 grow" style={{ height: 200, width: 200 }} >
        <div className="Tilt-inner pa3">
          <img alt='logo' src={logo}/>
        </div>
      </Tilt>
  );
}

export default Logo;
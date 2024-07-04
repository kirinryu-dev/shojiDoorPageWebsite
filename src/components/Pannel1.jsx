// Example: src/components/FirstImpressionComponent.js
import React from 'react';

// import custom css 

import './Pannel.css'

const Pannel = () => {
  return (
    <div className='pannel'>
      <h2>First Impression Component</h2>
      <div className='impression'>
        <div className='me-img'>
          zara
        </div>

        <div className='about-me'>
          kempachi

        </div>
      </div>
    </div>
  );
};

export default Pannel;

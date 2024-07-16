// src/components/ModalAbout.js

import React from 'react';
import Onii from '../assets/onii.png';

// import custom css 
import './ModalAbout.css';
import './MobileModalAbout.css';

const ModalAbout = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="aboutmodal rajdhani-regular">
      <div className="aboutmodal_content">
        <span className="aboutmodal_content_closebtn" onClick={onClose}>&times;</span>
        <h2>INFO SCREEN</h2>

        <div className='aboutInfo'>
          <div className='aboutInfoLogo'>
            <img src={Onii} alt="Onii Logo" />
          </div>

          <div className='aboutinfoDescription'>
            <div>
              <h3><span>ABOUT</span></h3>
              <p>
                This is my final portfolio. The initial prototype can be seen <a href="https://my-project-website-two.vercel.app/">HERE</a>.
              </p>
            </div>

            <div>
              <h3><span>THEME</span></h3>
              <p>
                The theme is CYBERPUNK with a <a href="https://en.wikipedia.org/wiki/Shoji">Shoji Door</a> aesthetic, inspired by the event menu from Mount Firmament in Wuthering Waves.
              </p>
            </div>

            <div>
              <h3><span>SOURCES</span></h3>
              <p>
                Resources from <a href="https://www.behance.net/gallery/133185623/Cyberpunk-2077User-Interface-(Part-2)">Cyberpunk 2077—User Interface (Part 2)</a> by Vladmir Vilimovsky.
              </p>
            </div>

            <div>
              <h3><span>SUPPLY</span></h3>
              <p>
                Special thanks to all contributors and supporters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAbout;

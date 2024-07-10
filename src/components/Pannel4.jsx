// Example: src/components/FirstImpressionComponent.js
import React from 'react';
import Me from '../assets/me-duh.png';
import code from '../assets/code_logo_no_bg.png'

// import custom css 

import './Pannel.css'

const Pannel = () => {
  return (
    <div className='pannel rajdhani-regular'>

      {/* top content  */}

      <div className='pannel-identity'>
      <h2>CONTACT SCREEN</h2>
      <p>A bref self description about me and stuff</p>
      </div>

      {/* bottom content  */}

      <div className='identity-container'>

        <div className='identity-me-container'>
          <img src={Me} alt="kirinryu" srcset="" />
        </div>

        <div className='identity-helper-container'>

          <div className='identity-details'>
            <div className='detail-container'>
              <div className='detail-content'>
                <h3>NAME</h3>
                <p>TCHALIM SAM TANGUY</p>
              </div>

              <div className='detail-content'>
                <h3>
                  CONACT METHODE
                </h3>
                <p>
                  <span>LOGO HERE - WEB DEV</span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit ad amet ducimus non vel distinctio, asperiores quae qui sequi!

                </p>
              </div>

              <div className='detail-content'>

                <div className='contact-container'>

                  <div className='methode'>
                    <div className='meth'>
                      <span>
                        GMAIL
                      </span>

                    </div>

                    <div className='meth'>
                      <span>
                        LINKDN
                      </span>

                    </div>

                    <div className='meth'>
                      <span>
                        WHATSAPP
                      </span>

                    </div>

                    <div className='meth'>
                      <span>
                        UP TO WORK 

                      </span>
                    </div>
                  </div>

                </div>

                

                <div className='detail-content'>
                  <h3>RELEVANT APPRECIATION</h3>
                  <div>
                    {/* here in the background will be digital data transfert like matrix in the background  */}
                    <p>BACHELOR MARKETING STRATEGY</p>
                    <p>FRONT END TECHNOLOGY CERTIFICAT</p>

                  </div>
                </div>
              </div>
              

            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Pannel;

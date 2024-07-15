// Example: src/components/FirstImpressionComponent.js
import React from 'react';
import code from '../assets/code_logo_no_bg.png';
// import Me from '../assets/me-duh.png';
// import code from '../assets/code_logo_no_bg.png'
// import MyReactIcon from '../assets/react-i.png';

// import custom css 

import './Pannel.css'

const Pannel = () => {
  return (
    <div className='pannel rajdhani-regular'>

      {/* top content  */}

      <div className='pannel-identity'>
      <h2>SKILLS SCREEN</h2>
      <p>A bref self description about me and stuff</p>
      </div>

      {/* bottom content  */}

      <div className='identity-container'>

        {/* <div className='identity-me-container'>
          <img src={Me} alt="kirinryu" srcset="" />
        </div> */}

        <div className='skill-container'>

          <div className='identity-details'>
            <div className='detail-container'>
              <div className='detail-content'>
                <h3>NAME</h3>
                <p>TCHALIM SAM TANGUY</p>
              </div>

              <div className='detail-content'>
                <h3>
                  SKILLS
                </h3>

                <p>
                  <img src={code} alt="" className='codeImg' /> - WEB DEV  
                  I Enjoy working with react and Angular for Front-End development. On the Back-End , i like using Node.js and Django.
                  I'm olso getting familiar with MongoDB and SQL databases and use Vite to speed up builds
                </p>


              </div>

              <div className='skill-content'>
              <div className='tech-stack'>
                    <div className="tech">
                      <span>FRONT END</span>
                      <ul>
                        <li>
                          REACT
                        </li>
                        <li>ANGULAR</li>
                      </ul>
                    </div>
                    <div className="tech">
                      <span>BACK END</span>
                      <ul>
                        <li>NODE JS</li>
                        <li>DJANGO WEB</li>
                      </ul>
                    </div>
                    <div className="tech">
                      <span>DATABASE</span>
                      <ul>
                        <li>MONGO DB</li>
                        <li>SQL DB</li>
                      </ul>
                    </div>
                    <div className="tech">
                      <span>BUILD TOOL</span>
                      <ul>
                        <li>VITE</li>
                      </ul>

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

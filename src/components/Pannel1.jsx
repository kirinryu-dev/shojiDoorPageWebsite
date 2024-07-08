// Example: src/components/FirstImpressionComponent.js
import React from 'react';
import Me from '../assets/me-duh.png';
import code from '../assets/code_logo_no_bg.png';

import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import RecommendIcon from '@mui/icons-material/Recommend';


// import custom css 

import './Pannel.css'

const Pannel = () => {



  return (
    <div className='pannel rajdhani-regular'>

      {/* top content  */}

      <div className='pannel-identity'>
      <h2>SUMMARY SCREEN</h2>
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
                  BACK STORY
                </h3>
                <p>
                  <span>LOGO HERE - WEB DEV</span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit ad amet ducimus non vel distinctio, asperiores quae qui sequi!

                </p>
              </div>

              <div className='detail-content'>
                <h3>Experience</h3>
                <p> > 5 years  </p>

              </div>

              <div className='detail-content'>
              <h3>MENTAL CAPATIBILITY </h3>
                <div className='detail-stat-content'>
                
                <div className='identity-stats'>
                    <div className="stats"><i className='stat-icon'><PsychologyIcon /></i><p>TECHNICAL SKILL</p></div>
                    <div className="stats"><i className='stat-icon'><EmojiObjectsIcon /></i><p>PROBLEM SOLVING</p></div>
                    <div className="stats"><i className='stat-icon'><FeedbackIcon /></i><p>COMMUNICATION SKILL</p></div>
                    <div className="stats"><i className='stat-icon'><SettingsSuggestIcon /></i><p>ADAPTABILITY</p></div>
                    <div className="stats"><i className='stat-icon'><RecommendIcon /></i><p>PROFESSIONALISM</p></div>
                </div>

                {/* <div className='code'>
                  <img src={code} alt="" />
                </div> */}


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

import React from 'react';
import Me from '../assets/me-duh.png';
import './Pannel.css'; // Import the CSS file

const Pannel = () => {

  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='pannel rajdhani-regular'>
      {/* Top content */}
      <div className='pannel-identity'>
        <h2>CONTACT SCREEN</h2>
        <p>A brief self description about me and stuff</p>
      </div>

      {/* Bottom content */}
      <div className='identity-container'>
        <div className='identity-me-container'>
          <img src={Me} alt="kirinryu" />
        </div>

        <div className='identity-helper-container'>
          <div className='identity-details'>
            <div className='detail-container'>
              <div className='detail-content'>
                <h3>NAME</h3>
                <p>TCHALIM SAM TANGUY</p>
              </div>

              <div className='detail-content'>
                <h3>CONTACT METHOD</h3>
                <p>
                  <span>LOGO HERE - WEB DEV</span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit ad amet ducimus non vel distinctio, asperiores quae qui sequi!
                </p>
              </div>

              <div className='detail-content'>
                <div className='contact-container'>
                  <div className='methode'>
                    <button className='meth' onClick={() => handleNavigation('mailto:your-email@example.com')}>
                      GMAIL
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://www.linkedin.com/in/your-profile')}>
                      LINKEDIN
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://wa.me/your-phone-number')}>
                      WHATSAPP
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://www.upwork.com/freelancers/your-profile')}>
                      UP TO WORK
                    </button>
                  </div>
                </div>

                <div className='detail-content'>
                  <h3>RELEVANT APPRECIATION</h3>
                  <div>
                    {/* here in the background will be digital data transfer like matrix in the background */}
                    <p>BACHELOR MARKETING STRATEGY</p>
                    <p>FRONT END TECHNOLOGY CERTIFICATE</p>
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

import React from 'react';
// import Me from '../assets/me-duh.png';
import code from '../assets/code_logo_no_bg.png';



// import custom css 
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

      <div className='identity-details '>
            <div className='detail-container'>
              <div className='detail-content'>
                <h3>NAME</h3>
                <p className='swapPseudo'>TCHALIM SAM TANGUY</p>
              </div>

              <div className='detail-content'>
                <h3>CONTACT METHOD</h3>
                <p>
                <img src={code} alt="" className='codeImg' /> - WEB DEV -
                   You can reach out to me via Email 
                   Or oter methode you like under for any inquiries or collabortion opportunities.<br/>
                   Feel free to connect with me!
                   I look forward to hearing from you!

                </p>
              </div>

              <div className='detail-content'>
                <div className='contact-container'>
                  <div className='methode'>
                    <button className='meth' onClick={() => handleNavigation('mailto:kirinryu.dev@gmail.com')}>
                      GMAIL
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://www.linkedin.com/in/sam-tanguy-tchalim-93857927a/')}>
                      LINKEDIN
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://wa.me/+22890553719')}>
                      WHATSAPP
                    </button>

                    <button className='meth' onClick={() => handleNavigation('https://www.upwork.com/freelancers/~01e4d60acb132689cd')}>
                      UP TO WORK
                    </button>
                  </div>
                </div>



                
              </div>
            </div>
          </div>
    </div>
  );
};

export default Pannel;

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavigationBar';
import panelData from '../data';
import './ShojiDoors.css';
import './Accordion.css';
import Modal from '../pages/Modal';

// Example component imports (using alias names for clarity)
import Panel1 from '../components/Pannel1'; // Adjust the import paths as per your project structure
import Panel2 from '../components/Pannel2';
import Panel3 from '../components/Pannel3';
import Panel4 from '../components/Pannel4';

const ShojiDoor = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (clickCount === panelData.length) {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
          setShowThankYou(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [clickCount]);

  const handlePanelClick = (panel) => {
    setActivePanel(panel.id);
    setIsModalOpen(true);
    setClickCount((prevCount) => prevCount + 1);

    // Trigger the door opening animation
    if (!isMobile) {
      document.querySelectorAll('.shoji_panel').forEach((panelElement) => {
        panelElement.classList.add('active');
      });
    }
  };

  const handleCloseModal = () => {
    setActivePanel(null);
    setIsModalOpen(false);

    // Reset the door animation
    if (!isMobile) {
      document.querySelectorAll('.shoji_panel').forEach((panelElement) => {
        panelElement.classList.remove('active');
      });
    }
  };

  const handleNext = () => {
    setActivePanel((prevPanel) => (prevPanel % panelData.length) + 1);
  };

  const handlePrev = () => {
    setActivePanel((prevPanel) => (prevPanel === 1 ? panelData.length : prevPanel - 1));
  };

  const renderModalContent = () => {
    switch (activePanel) {
      case 1:
        return <Panel1 />;
      case 2:
        return <Panel2 />;
      case 3:
        return <Panel3 />;
      case 4:
        return <Panel4 />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar />
      {!isMobile ? (
        <div className="shoji_door">
          {panelData.map((panel) => (
            <div
              key={panel.id}
              className={`shoji_panel ${activePanel === panel.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${panel.bgImage})` }}
              onClick={() => handlePanelClick(panel)}
            >
              <div className="panel_title rajdhani-regular">{panel.title}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="accordion">
          {panelData.map((panel) => (
            <div key={panel.id} className="accordion_item rajdhani-regular">
              <div
                className={`accordion_title ${activePanel === panel.id ? 'active' : ''}`}
                onClick={() => handlePanelClick(panel)}
              >
                {panel.title}
              </div>
              <div className={`accordion_content ${activePanel === panel.id ? 'show' : ''}`}>
                {activePanel === panel.id && renderModalContent()}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onNext={handleNext} onPrev={handlePrev}>
        {isModalOpen && <div className="modal_content">{renderModalContent()}</div>}
      </Modal>

      {showThankYou && (
        <div className="thank_you_section">
          <h2>Thank you for visiting!</h2>
          <p>Check out my <a href="/blog">Blog</a> and <a href="/testimonials">Testimonials</a>.</p>
        </div>
      )}
    </>
  );
};

export default ShojiDoor;

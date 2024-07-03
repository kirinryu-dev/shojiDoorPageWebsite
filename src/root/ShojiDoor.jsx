// src/components/ShojiDoor.js
import React, { useState } from 'react';
import NavBar from '../components/NavigationBar';
import panelData from '../data';
import './ShojiDoors.css';

const ShojiDoor = () => {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePanelClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);

    // Trigger the door opening animation
    document.querySelectorAll('.shoji_panel').forEach((panel, index) => {
      if (index < 2) {
        panel.style.transform = 'translateX(-100%)';
      } else {
        panel.style.transform = 'translateX(100%)';
      }
    });
  };

  const handleCloseModal = (event) => {
    if (event.target.classList.contains('modal')) {
      setIsModalOpen(false);
      document.querySelectorAll('.shoji_panel').forEach((panel) => {
        panel.style.transform = 'translateX(0)';
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="shoji_door">
        {panelData.map(panel => (
          <div
            key={panel.id}
            className="shoji_panel"
            style={{ backgroundImage: `url(${panel.bgImage})` }}
            onClick={() => handlePanelClick(panel.content)}
            onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(${panel.hoverImage})`}
            onMouseLeave={e => e.currentTarget.style.backgroundImage = `url(${panel.bgImage})`}
          >
            <div className="panel_title">{panel.title}</div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close-button" onClick={() => handleCloseModal({ target: { classList: { contains: () => true } } })}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShojiDoor;

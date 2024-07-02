// ShojiDoor.js
import React, { useState } from 'react';
import './ShojiDoors.css';

const ShojiDoor = () => {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePanelClick = (panelNumber) => {
    setModalContent(`This is content for modal ${panelNumber}`);
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
      <div className="shoji_door">
        <div className="shoji_panel panel-1" onClick={() => handlePanelClick(1)}></div>
        <div className="shoji_panel panel-2" onClick={() => handlePanelClick(2)}></div>
        <div className="shoji_panel panel-3" onClick={() => handlePanelClick(3)}></div>
        <div className="shoji_panel panel-4" onClick={() => handlePanelClick(4)}></div>
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

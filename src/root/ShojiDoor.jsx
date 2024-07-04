import React, { useState } from 'react';
import NavBar from '../components/NavigationBar';
import panelData from '../data';
import './ShojiDoors.css';
import Modal from '../pages/Modal'; // Import your Modal component

import Panel1 from '../components/Pannel1'; // Adjust the import paths as per your project structure
import Panel2 from '../components/Pannel2';
import Panel3 from '../components/Pannel3';
import Panel4 from '../components/Pannel4';

const ShojiDoor = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [panelState, setPanelState] = useState('idle');

  const handlePanelClick = (panel) => {
    setActivePanel(panel.id);
    setIsModalOpen(true);
    setPanelState('clicked');
  };

  const handleCloseModal = () => {
    setActivePanel(null);
    setIsModalOpen(false);
    setPanelState('idle');
  };

  const handleMouseEnter = () => {
    setPanelState('hover');
  };

  const handleMouseLeave = () => {
    setPanelState('idle');
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
      <div className="shoji_door">
        {panelData.map((panel) => (
          <div
            key={panel.id}
            className={`shoji_panel ${panelState}`}
            style={{ backgroundImage: `url(${panel.bgImage})` }}
            onClick={() => handlePanelClick(panel)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="panel_title">{panel.title}</div>
          </div>
        ))}
      </div>

      {/* Render the Modal component conditionally */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isModalOpen && (
          <div className="modal_content">
            <span className="modal_content_closebtn" onClick={handleCloseModal}>&times;</span>
            {renderModalContent()}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ShojiDoor;

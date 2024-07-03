import React, { useState } from 'react';
import NavBar from '../components/NavigationBar';
import panelData from '../data';
import './ShojiDoors.css';
import Modal from '../pages/Modal'; // Import your Modal component

// Example component imports (using alias names for clarity)
import Panel1 from '../components/Pannel1'; // Adjust the import paths as per your project structure
import Panel2 from '../components/Pannel2';
import Panel3 from '../components/Pannel3';
import Panel4 from '../components/Pannel4';

const ShojiDoor = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePanelClick = (panel) => {
    setActivePanel(panel.id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setActivePanel(null);
    setIsModalOpen(false);
  };

  // Function to render component based on activePanel state
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
            className={`shoji_panel ${activePanel === panel.id ? 'active' : ''}`}
            style={{ backgroundImage: `url(${panel.bgImage})` }}
            onClick={() => handlePanelClick(panel)}
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

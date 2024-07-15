import React from 'react';
import './Modal.css';
import './ModalMobile.css';  // Import the mobile styles

const Modal = ({ isOpen, onClose, onNext, onPrev, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <span className="modal_content_closebtn" onClick={onClose}>&times;</span>
        <div className="modal_children">{children}</div>
        <div className="modal_navigation">
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

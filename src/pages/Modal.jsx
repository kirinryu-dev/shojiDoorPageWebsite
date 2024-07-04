// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <span className="modal_content_closebtn" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

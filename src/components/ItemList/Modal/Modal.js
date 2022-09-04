import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlayStyle" />
      <div className="modalStyle">
        <button className="closeModal" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}

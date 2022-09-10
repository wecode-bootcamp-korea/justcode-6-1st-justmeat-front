import React from 'react';
import './RegisterModal.scss';

function RegisterModal(props) {
  const { message, id, closeModal } = props;
  return (
    <div className="registermodal-container">
      <div className="registermodal-content text-center">
        <p className="registermodal-error-title">{message.type}</p>
        <p className="registermodal-error-content">{message.content}</p>
        <button className="registermodal-btn" id={id} onClick={closeModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default RegisterModal;

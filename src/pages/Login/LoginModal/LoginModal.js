import React from 'react';
import './LoginModal.scss';

function LoginModal(props) {
  const { message, id, closeModal } = props;
  return (
    <div className="loginmodal-container">
      <div className="loginmodal-content text-center">
        <p className="loginmodal-error-title">{message.type}</p>
        <p className="loginmodal-error-content">{message.content}</p>
        <button className="loginmodal-btn" id={id} onClick={closeModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default LoginModal;

import './RegisterButton.scss';

function RegisterButton(props) {
  const { inputText, submitBtnValidation } = props;

  return (
    <div className="register-btn-wrap">
      <button className="btn-previous">이전으로</button>
      <button className="btn-submit" onClick={submitBtnValidation}>
        {inputText}
      </button>
    </div>
  );
}

export default RegisterButton;

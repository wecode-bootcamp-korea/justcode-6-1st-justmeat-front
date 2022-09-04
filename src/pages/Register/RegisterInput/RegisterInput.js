import './RegisterInput.scss';

function RegisterInput(props) {
  const { type, content, value, handler } = props;

  return (
    <div className="register-2nd-input-wrap">
      <div className="register-2nd-input-type setting-center">
        <p>{content}</p>
      </div>
      <div className="register-2nd-input-content">
        <input type={type} value={value} onChange={handler} />
      </div>
    </div>
  );
}

export default RegisterInput;

import { useState, useEffect } from 'react';
import './LoginSuggestion.scss';
import { Link } from 'react-router-dom';

function LoginSuggestion(props) {
  const { goToRegister } = props;

  // 나중에 state 값 관리 적용하기
  const suggestionText = ['login', ' 회원', '회원가입하기'];

  return (
    <article className={`${suggestionText[0]}-to-signup-wrap todo`}>
      <p className="signup-suggestion setting-center todo">
        정육각{suggestionText[1]}이신가요?
        <Link
          to="/signup"
          // to={`${suggestionText[0]}`}
          // onClick={changeSuggestion}
          style={{ marginLeft: '10px' }}
        >
          {suggestionText[2]}
        </Link>
      </p>
    </article>
  );
}

export default LoginSuggestion;

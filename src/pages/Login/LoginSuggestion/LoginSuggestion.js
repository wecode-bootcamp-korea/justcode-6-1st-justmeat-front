import { useState, useEffect } from 'react';
import './LoginSuggestion.scss';
import { Link } from 'react-router-dom';

function LoginSuggestion(props) {
  const { text } = props;

  return (
    <article className={`${text[0]}-suggestion-wrap`}>
      <p className={`${text[0]}-suggestion setting-center`}>
        정육각{text[1]}이신가요?
        <Link
          to={text[2]}
          style={{ color: 'red', textDecoration: 'none', marginLeft: '10px' }}
        >
          {text[3]}
        </Link>
      </p>
    </article>
  );
}

export default LoginSuggestion;

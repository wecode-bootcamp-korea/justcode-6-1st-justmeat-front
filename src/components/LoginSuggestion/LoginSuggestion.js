import './LoginSuggestion.scss';

function LoginSuggestion(props) {
  const { type, text } = props;

  return (
    <article className={`${type}-to-signup-wrap todo`}>
      <p className="todo">
        정육각{text[0]}이신가요?
        <span> {text[1]}</span>
      </p>
    </article>
  );
}

export default LoginSuggestion;

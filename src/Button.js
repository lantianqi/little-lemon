function Button(props) {
  return (
    <button
      type="button"
      className="button1-container"
      data-testid="button"
      onClick={props.onClick}
      {...props}
    >
      {props.text}
    </button>
  );
}

export default Button;

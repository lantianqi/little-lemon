function Button1(props) {
  return <div className="button1-container" onClick={props.onClick}>{props.text}</div>;
}

export default Button1;
function TabButton(props) {
  function handleClick() {
    console.log("Hello World");
  }

  return (
    <li>
      <button onClick={props.onClick}>{props.children}</button>
    </li>
  );
}

export default TabButton;

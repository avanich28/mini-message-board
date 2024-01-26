function Button({ children, className }) {
  function click() {
    alert("hello react");
  }
  return (
    <button className={`transition-all ${className}`} onClick={click}>
      {children}
    </button>
  );
}

export default Button;

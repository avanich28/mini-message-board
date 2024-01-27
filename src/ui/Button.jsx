function Button({ children, className, onClick }) {
  return (
    <button className={`transition-all ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

function Button({ children, className, onClick, type }) {
  return (
    <button
      className={`transition-all ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;

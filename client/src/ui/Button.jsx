function Button({ children, className, onClick, type, disabled = false }) {
  return (
    <button
      className={`transition-all ${className} ${
        disabled ? "cursor-not-allowed hover:text-inherit" : ""
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

function Input({ type = "text", placeholder, style = "primary" }) {
  const defaultStyles = {
    primary: "px-2 py-1 text-zinc-50",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`appearance-none ${defaultStyles[style]}`}
    />
  );
}

export default Input;

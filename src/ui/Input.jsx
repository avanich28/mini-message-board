function Input({
  type = "text",
  onChange,
  value,
  placeholder,
  required = true,
  style = "primary",
  textColor = "initial",
}) {
  const defaultStyles = {
    primary: "appearance-none input input-ghost input-bordered w-full",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={defaultStyles[style]}
      style={{ color: textColor }}
      required={required}
    />
  );
}

export default Input;

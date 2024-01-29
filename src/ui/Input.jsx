function Input({
  type = "text",
  name,
  onChange,
  value,
  placeholder,
  style = "primary",
  textColor = "initial",
}) {
  const defaultStyles = {
    primary: "appearance-none input input-ghost input-bordered w-full",
  };

  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={defaultStyles[style]}
      style={{ color: textColor }}
    />
  );
}

export default Input;

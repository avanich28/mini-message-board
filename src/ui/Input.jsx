function Input({ type = "text", placeholder, required = true }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`appearance-none input input-ghost input-bordered w-full`}
      style={{ color: "whitesmoke" }}
      required={required}
    />
  );
}

export default Input;

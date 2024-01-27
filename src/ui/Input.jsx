function Input({ type = "text", placeholder, onChange, required = true }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`appearance-none input input-ghost input-bordered w-full`}
      style={{ color: "whitesmoke" }}
      required={required}
    />
  );
}

export default Input;

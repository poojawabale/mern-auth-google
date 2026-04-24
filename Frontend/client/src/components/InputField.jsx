const InputField = ({ type = "text", placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-style"
    />
  );
};

export default InputField;
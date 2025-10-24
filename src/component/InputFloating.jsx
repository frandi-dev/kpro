const InputFloating = ({
  icon,
  type,
  id,
  placeholder,
  value,
  onChange,
  name,
  label,
  required,
}) => {
  return (
    <div className="input-group text-light mb-4 mt-2 input-login">
      <span className="input-group-text bg-transparant border border-secondary-subtle">
        {icon}
      </span>
      <div className="form-floating">
        <input
          type={type}
          className="form-control bg-transparant text-light border border-secondary-subtle"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={name}
          required={required}
        />

        <label htmlFor={id} className="text-light">
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputFloating;

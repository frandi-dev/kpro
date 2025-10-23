const InputFloating = (props) => {
  return (
    <div className="input-group text-light mb-4 mt-2 input-login">
      <span className="input-group-text bg-transparant border border-secondary-subtle">
        {props.icon}
      </span>
      <div className="form-floating">
        <input
          type={props.type}
          className="form-control bg-transparant text-light border border-secondary-subtle"
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />

        <label htmlFor={props.id} className="text-light">
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default InputFloating;

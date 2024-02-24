const ToggleCheckbox = (props) => {
  return (
    <div className="form-control  ">
      <label className="cursor-pointer label ">
        <p className="label-text text-slate-300">{props.text}</p>
        <input
          type="checkbox"
          className={`toggle toggle-sm ${props.classInfo}`}
          checked
        />
      </label>
    </div>
  );
};

export default ToggleCheckbox;

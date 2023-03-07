interface SelectInputProps {
  label: string;
  options: string[];
  error: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = (props: SelectInputProps) => {
  const style = "select select-bordered";
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <select className={props.error ? style + " border-red-500" : style} onChange={props.onChange}>
        <option disabled value="">
          -
        </option>
        {props.options &&
          props.options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectInput;

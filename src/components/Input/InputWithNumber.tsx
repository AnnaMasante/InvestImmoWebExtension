interface InputWithNumberProps {
  label: string;
  error: boolean;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithNumber = (props: InputWithNumberProps) => {
  const style = "input input-bordered w-full max-w-xs";

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        type="number"
        className={props.error ? style + " border-red-500" : style}
        onChange={props.onChange}
      />
      {props.error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          The field is invalid
        </span>
      )}
    </div>
  );
};

export default InputWithNumber;

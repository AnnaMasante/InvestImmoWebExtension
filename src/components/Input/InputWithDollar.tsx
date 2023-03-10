interface InputWithDollarProps {
  label: string;
  error: boolean;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithDollar = (props: InputWithDollarProps) => {
  const style = "input input-bordered w-full max-w-xs";

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <label className="input-group">
        <input
          type="number"
          placeholder="0"
          className={props.error ? style + " border-red-500" : style}
          onChange={props.onChange}
        />
        <span>CAD</span>
      </label>
      {props.error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          The field is invalid
        </span>
      )}
    </div>
  );
};
export default InputWithDollar;

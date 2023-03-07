import { Features } from "@/src/types/InvestInfo";
import { type } from "os";

interface StandardInputProps {
  label: string;
  type?: string;
  value: string;
  error: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StandardInput = (props: StandardInputProps) => {
  const style = "input input-bordered w-full max-w-xs";

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        type="text"
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
export default StandardInput;

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputWithDollar = () => {
  return (
    <div>
      <label htmlFor="">Soemting</label>
      <input
        type="text"
        className="border border-gray-400 block w-full rounded-lg py-2 px-4 focus:border-t-neutral-600"
        placeholder="Write someting"
      />
    </div>
  );
};
export default InputWithDollar;

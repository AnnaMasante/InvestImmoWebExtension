import InputWithDollar from "./Input/InputWithDollar";
import StandardInput from "./Input/StandardInput";

const AcquisitionCostStep = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Acquisition cost</h1>
      <StandardInput label="Purchase price"></StandardInput>
      <StandardInput label="Brocker fees"></StandardInput>
      <StandardInput label="Legal fees"></StandardInput>
      <StandardInput label="Furniture"></StandardInput>
      <StandardInput label="Renovation work"></StandardInput>

    </>
  );
};
export default AcquisitionCostStep;

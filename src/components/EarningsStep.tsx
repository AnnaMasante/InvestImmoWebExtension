import StandardInput from "./Input/StandardInput";

const EarningsStep = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Future earnings</h1>
      <StandardInput label="Operation mode"></StandardInput>
      <StandardInput label="Monthly/annual/overnight rental amount"></StandardInput>
    </>
  );
};
export default EarningsStep;

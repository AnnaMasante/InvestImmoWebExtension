import StandardInput from "./Input/StandardInput";

const FundingsStep = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Acquisition cost</h1>
      <StandardInput label="Down payment"></StandardInput>
      <StandardInput label="Asked price"></StandardInput>
      <StandardInput label="Mortgage loan"></StandardInput>
      <StandardInput label="Amortization period"></StandardInput>
      <StandardInput label="Rate"></StandardInput>
    </>
  );
};
export default FundingsStep;

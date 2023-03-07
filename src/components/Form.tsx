import { useState } from "react";
import AcquisitionCostStep from "./AcquisitionCostStep";
import EarningsStep from "./EarningsStep";
import ExpensesStep from "./ExpensesStep";
import FeaturesStep from "./FeaturesStep";
import FundingsStep from "./FundingsStep";

const Form = () => {
  const [formStep, setFormStep] = useState(0);

  return (
    <form action="" className="px-4 my-32 max-w-2xl mx-auto space-y-4">
      {formStep == 0 && <FeaturesStep changeStep={setFormStep}></FeaturesStep>}
      {formStep == 1 && (
        <AcquisitionCostStep changeStep={setFormStep}></AcquisitionCostStep>
      )}
      {formStep == 2 && <EarningsStep changeStep={setFormStep}></EarningsStep>}
      {formStep == 3 && <FundingsStep changeStep={setFormStep}></FundingsStep>}
      {formStep == 4 && <ExpensesStep changeStep={setFormStep}></ExpensesStep>}
    </form>
  );
};
export default Form;

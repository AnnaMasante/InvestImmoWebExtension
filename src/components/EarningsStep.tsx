import { Dispatch, SetStateAction, useState } from "react";
import { Earnings } from "../types/InvestInfo";
import Button from "./Buttons/Button";
import InputWithDollar from "./Input/InputWithDollar";
import SelectInput from "./Input/SelectInput";

interface EarningsStepProps {
  changeStep: Dispatch<SetStateAction<number>>;
}

const EarningsStep = (props: EarningsStepProps) => {
  const [earningsInfo, setEarningsInfo] = useState({
    operationMode: "",
    earningAmount: 0,
  });

  const [earningsInfoError, setEarningsInfoError] = useState({
    operationMode: false,
    earningAmount: false,
  });

  const validate = () => {
    let property: keyof typeof earningsInfo;
    let nextStep: Boolean = true;
    const newEarningsInfoError = { ...earningsInfoError };
    for (property in earningsInfo) {
      if (property == "earningAmount" && earningsInfo[property] < 0) {
        newEarningsInfoError[property] = true;
        nextStep = false;
      } else if (
        property == "operationMode" &&
        earningsInfo[property] === "-"
      ) {
        newEarningsInfoError[property] = true;
        nextStep = false;
      } else {
        newEarningsInfoError[property] = false;
      }
    }
    setEarningsInfoError(newEarningsInfoError);

    if (nextStep) {
      props.changeStep((prevState) => prevState + 1);
    }
  };

  const options = [
    "Bare",
    "Furnished",
    "Income property",
    "Flat share",
    "Short-term location",
  ];

  const optionFacturation: [string, string][] = [
    [options[0], "Annual"],
    [options[1], "Annual"],
    [options[2], "Annual"],
    [options[3], "Annual"],
    [options[4], "Annual"],
  ];

  const [facturationType, setFacturationType] = useState<string>();

  return (
    <>
      <h1 className="text-3xl font-semibold">Future earnings</h1>

      <SelectInput
        label="Operation mode"
        error={earningsInfoError.operationMode}
        onChange={(e) =>
          setEarningsInfo({
            ...earningsInfo,
            operationMode: e.target.value,
          })
        }
        options={options}
      ></SelectInput>
      <InputWithDollar
        label="Annual earnings"
        error={earningsInfoError.earningAmount}
        value={earningsInfo.earningAmount}
        onChange={(e) =>
          setEarningsInfo({
            ...earningsInfo,
            earningAmount: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <Button label="Next step" onClick={validate}></Button>
    </>
  );
};
export default EarningsStep;

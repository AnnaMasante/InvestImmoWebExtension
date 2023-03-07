import { Dispatch, SetStateAction, useState } from "react";
import { AcquisitionCost } from "../types/InvestInfo";
import Button from "./Buttons/Button";
import InputWithDollar from "./Input/InputWithDollar";

interface AcquisitionCostStepProps {
  changeStep: Dispatch<SetStateAction<number>>;
}

const AcquisitionCostStep = (props: AcquisitionCostStepProps) => {
  const [acquisitionCostInfo, setAcquisitionCostInfo] =
    useState<AcquisitionCost>({
      purchasePrice: 0,
      brockerFees: 0,
      legalFees: 0,
      furnitureFees: 0,
      renovationCost: 0,
    });

  const [acquisitionCostInfoError, setAcquisitionCostInfoError] = useState({
    purchasePrice: false,
    brockerFees: false,
    legalFees: false,
    furnitureFees: false,
    renovationCost: false,
  });

  const validate = () => {
    let property: keyof typeof acquisitionCostInfo;
    let nextStep: Boolean = true;

    const newAcquisitionCostInfoError = { ...acquisitionCostInfoError };

    for (property in acquisitionCostInfo) {
      if (acquisitionCostInfo[property] < 0) {
        newAcquisitionCostInfoError[property] = true;
        nextStep = false;
      } else {
        newAcquisitionCostInfoError[property] = false;
      }
    }

    setAcquisitionCostInfoError(newAcquisitionCostInfoError);

    if (nextStep) {
      props.changeStep((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Acquisition cost</h1>
      <InputWithDollar
        label="Purchase price"
        value={acquisitionCostInfo.purchasePrice}
        error={acquisitionCostInfoError.purchasePrice}
        onChange={(e) =>
          setAcquisitionCostInfo({
            ...acquisitionCostInfo,
            purchasePrice: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>
      <InputWithDollar
        label="Brocker fees"
        value={acquisitionCostInfo.brockerFees}
        error={acquisitionCostInfoError.brockerFees}
        onChange={(e) =>
          setAcquisitionCostInfo({
            ...acquisitionCostInfo,
            brockerFees: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>
      <InputWithDollar
        label="Legal fees"
        error={acquisitionCostInfoError.legalFees}
        value={acquisitionCostInfo.legalFees}
        onChange={(e) =>
          setAcquisitionCostInfo({
            ...acquisitionCostInfo,
            legalFees: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>
      <InputWithDollar
        label="Furniture"
        value={acquisitionCostInfo.furnitureFees}
        error={acquisitionCostInfoError.furnitureFees}
        onChange={(e) =>
          setAcquisitionCostInfo({
            ...acquisitionCostInfo,
            furnitureFees: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>
      <InputWithDollar
        label="Renovation work"
        value={acquisitionCostInfo.renovationCost}
        error={acquisitionCostInfoError.renovationCost}
        onChange={(e) =>
          setAcquisitionCostInfo({
            ...acquisitionCostInfo,
            renovationCost: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>
      <Button label="Next step" onClick={validate}></Button>
    </>
  );
};
export default AcquisitionCostStep;

import { Dispatch, SetStateAction, useState } from "react";
import StandardInput from "./Input/StandardInput";
import { Fundings } from "../types/InvestInfo";
import Button from "./Buttons/Button";
import InputWithDollar from "./Input/InputWithDollar";
import InputWithNumber from "./Input/InputWithNumber";

interface FundingsStepProps {
  changeStep: Dispatch<SetStateAction<number>>;
}

const FundingsStep = (props: FundingsStepProps) => {
  const [fundingsStepInfo, setFundingStepInfo] = useState<Fundings>({
    downPayment: 0,
    askedPrice: 0,
    mortgage: 0,
    amortizationPeriod: 0,
    rate: 0,
  });

  const [fundingsStepInfoError, setFundingStepInfoError] = useState({
    downPayment: false,
    askedPrice: false,
    mortgage: false,
    amortizationPeriod: false,
    rate: false,
  });

  const validate = () => {
    let property: keyof typeof fundingsStepInfo;
    let nextStep: Boolean = true;

    const newFundingsStepInfoError = { ...fundingsStepInfoError };

    for (property in fundingsStepInfo) {
      if (fundingsStepInfo[property] < 0) {
        newFundingsStepInfoError[property] = true;
        nextStep = false;
      } else {
        newFundingsStepInfoError[property] = false;
      }
    }

    setFundingStepInfoError(newFundingsStepInfoError);

    if (nextStep) {
      props.changeStep((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Fundings</h1>

      <InputWithDollar
        label="Asked price"
        value={fundingsStepInfo.askedPrice}
        error={fundingsStepInfoError.askedPrice}
        onChange={(e) =>
          setFundingStepInfo({
            ...fundingsStepInfo,
            askedPrice: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Down payment"
        value={fundingsStepInfo.downPayment}
        error={fundingsStepInfoError.downPayment}
        onChange={(e) =>
          setFundingStepInfo({
            ...fundingsStepInfo,
            downPayment: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Mortgage loan"
        value={fundingsStepInfo.mortgage}
        error={fundingsStepInfoError.mortgage}
        onChange={(e) =>
          setFundingStepInfo({
            ...fundingsStepInfo,
            mortgage: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithNumber
        label="Amortization period"
        value={fundingsStepInfo.amortizationPeriod}
        error={fundingsStepInfoError.amortizationPeriod}
        onChange={(e) =>
          setFundingStepInfo({
            ...fundingsStepInfo,
            amortizationPeriod: e.target.valueAsNumber,
          })
        }
      ></InputWithNumber>

      <InputWithNumber
        label="Rate"
        value={fundingsStepInfo.rate}
        error={fundingsStepInfoError.rate}
        onChange={(e) =>
          setFundingStepInfo({
            ...fundingsStepInfo,
            rate: e.target.valueAsNumber,
          })
        }
      ></InputWithNumber>
      <Button label="Next step" onClick={validate}></Button>
    </>
  );
};
export default FundingsStep;

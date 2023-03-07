import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Features } from "../types/InvestInfo";
import Button from "./Buttons/Button";
import InputWithDollar from "./Input/InputWithDollar";
import StandardInput from "./Input/StandardInput";

interface FeaturesStepProps {
  changeStep: Dispatch<SetStateAction<number>>;
}

const FeaturesStep = (props: FeaturesStepProps) => {
  const [featureInfo, setFeatureInfo] = useState<Features>({
    address: "",
    additionalInfo: "",
    city: "",
    province: "",
    postalCode: "",
    propertyType: "ddd",
    acquisitionDate: new Date(),
  });

  const [featureInfoError, setFeatureInfoError] = useState({
    address: false,
    additionalInfo: false,
    city: false,
    province: false,
    postalCode: false,
    propertyType: false,
    acquisitionDate: false,
  });

  const checkFeatures = () => {
    let property: keyof typeof featureInfo;
    let nextStep: Boolean = true;

    const newFeatureInfoError = { ...featureInfoError };
    for (property in featureInfo) {
      if (featureInfo[property] == "") {
        newFeatureInfoError[property] = true;
        nextStep = false;
      } else {
        newFeatureInfoError[property] = false;
      }
    }

    setFeatureInfoError(newFeatureInfoError);

    if (nextStep) {
      props.changeStep((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Features of the property</h1>

      <StandardInput
        label="Address"
        value={featureInfo.address}
        onChange={(e) =>
          setFeatureInfo({ ...featureInfo, address: e.target.value })
        }
        error={featureInfoError.address}
      ></StandardInput>
      <StandardInput
        label="Apartment, suite, etc."
        value={featureInfo.additionalInfo}
        error={featureInfoError.additionalInfo}
        onChange={(e) =>
          setFeatureInfo({ ...featureInfo, additionalInfo: e.target.value })
        }
      ></StandardInput>
      <StandardInput
        label="City"
        value={featureInfo.city}
        error={featureInfoError.city}
        onChange={(e) =>
          setFeatureInfo({ ...featureInfo, city: e.target.value })
        }
      ></StandardInput>
      <StandardInput
        label="Province"
        value={featureInfo.province}
        error={featureInfoError.province}
        onChange={(e) =>
          setFeatureInfo({ ...featureInfo, province: e.target.value })
        }
      ></StandardInput>
      <StandardInput
        label="Postal code"
        value={featureInfo.postalCode}
        error={featureInfoError.postalCode}
        onChange={(e) =>
          setFeatureInfo({ ...featureInfo, postalCode: e.target.value })
        }
      ></StandardInput>

      <Button label="Next step" onClick={checkFeatures}></Button>
    </div>
  );
};
export default FeaturesStep;

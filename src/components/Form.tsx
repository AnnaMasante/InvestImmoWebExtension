import { useState } from "react";
import AcquisitionCostStep from "./AcquisitionCostStep";
import EarningsStep from "./EarningsStep";
import ExpensesStep from "./ExpensesStep";
import FeaturesStep from "./FeaturesStep";
import FundingsStep from "./FundingsStep";

const Form = () => {


    const [formStep, setFormStep] = useState(0);

    return(
        <form action="" className="px-4 my-32 max-w-2xl mx-auto space-y-4">
            {formStep == 0 && 
            <FeaturesStep></FeaturesStep>  }   
            {formStep == 0 && 
            <AcquisitionCostStep></AcquisitionCostStep>  }   
            {formStep == 0 && 
            <EarningsStep></EarningsStep>  }   
            {formStep == 0 && 
            <FundingsStep></FundingsStep>  }
            {formStep == 0 && 
            <ExpensesStep></ExpensesStep>  }            
        </form>
    )
}
export default Form;
import { Dispatch, SetStateAction, useState } from "react";
import { Expenses } from "../types/InvestInfo";
import Button from "./Buttons/Button";
import InputWithDollar from "./Input/InputWithDollar";
import Title from "./Title/Title";

interface ExpensesStepProps {
  changeStep: Dispatch<SetStateAction<number>>;
}

const ExpensesStep = (props: ExpensesStepProps) => {
  const [expensesInfo, setExpensesInfo] = useState<Expenses>({
    coOwnership: 0,
    homeMaintenance: 0,
    propertyTax: 0,
    rentalManagementFees: 0,
    accountingExpenses: 0,
    subscriptions: 0,
    insurances: 0,
  });

  const [expensesInfoError, setExpensesInfoError] = useState({
    coOwnership: false,
    homeMaintenance: false,
    propertyTax: false,
    rentalManagementFees: false,
    accountingExpenses: false,
    subscriptions: false,
    insurances: false,
  });

  const validate = () => {
    let property: keyof typeof expensesInfo;
    let nextStep: Boolean = true;

    const newExpensesInfoError = { ...expensesInfoError };

    for (property in expensesInfo) {
      if (expensesInfo[property] < 0) {
        newExpensesInfoError[property] = true;
        nextStep = false;
      } else {
        newExpensesInfoError[property] = false;
      }
    }

    setExpensesInfoError(newExpensesInfoError);

    if (nextStep) {
      props.changeStep((prevState) => prevState + 1);
    }
  };
  return (
    <>
      <Title title="Expenses"></Title>

      <InputWithDollar
        label="Co-ownership charges"
        value={expensesInfo.coOwnership}
        error={expensesInfoError.coOwnership}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            coOwnership: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Home maintenance cost"
        value={expensesInfo.homeMaintenance}
        error={expensesInfoError.homeMaintenance}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            homeMaintenance: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Property tax"
        value={expensesInfo.propertyTax}
        error={expensesInfoError.propertyTax}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            propertyTax: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Rental management fees"
        value={expensesInfo.rentalManagementFees}
        error={expensesInfoError.rentalManagementFees}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            rentalManagementFees: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Accounting expenses"
        value={expensesInfo.accountingExpenses}
        error={expensesInfoError.accountingExpenses}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            accountingExpenses: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Subscriptions"
        value={expensesInfo.subscriptions}
        error={expensesInfoError.subscriptions}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            subscriptions: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <InputWithDollar
        label="Insurances"
        value={expensesInfo.insurances}
        error={expensesInfoError.insurances}
        onChange={(e) =>
          setExpensesInfo({
            ...expensesInfo,
            insurances: e.target.valueAsNumber,
          })
        }
      ></InputWithDollar>

      <Button label="Next step" onClick={validate}></Button>
    </>
  );
};
export default ExpensesStep;

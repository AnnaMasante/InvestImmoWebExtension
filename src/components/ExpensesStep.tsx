import StandardInput from "./Input/StandardInput";
import Title from "./Title/Title";

const ExpensesStep = () => {
    return (<>
    <Title title=""></Title>
    
    <StandardInput label="Address"></StandardInput>
        <StandardInput label="Apartment, suite, etc."></StandardInput>
        <StandardInput label="City"></StandardInput>
        <StandardInput label="Province"></StandardInput>
        <StandardInput label="Postal code"></StandardInput>
        <StandardInput label="Property type"></StandardInput>
        <StandardInput label="Acquisition date"></StandardInput></>)
}
export default ExpensesStep;
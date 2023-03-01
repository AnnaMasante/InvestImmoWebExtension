import InputWithDollar from "./Input/InputWithDollar";
import StandardInput from "./Input/StandardInput";

const FeaturesStep = () => {
return(
    <div>
      <h1 className="text-3xl font-semibold">Features of the property</h1>

        <StandardInput label="Address"></StandardInput>
        <StandardInput label="Apartment, suite, etc."></StandardInput>
        <StandardInput label="City"></StandardInput>
        <StandardInput label="Province"></StandardInput>
        <StandardInput label="Postal code"></StandardInput>
        <StandardInput label="Property type"></StandardInput>
        <StandardInput label="Acquisition date"></StandardInput>
    </div>
)
}
export default FeaturesStep;
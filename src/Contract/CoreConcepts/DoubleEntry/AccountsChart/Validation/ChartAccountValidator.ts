import Validator from "Contract/CoreConcepts/Validation/Validator";
import ChartAccount from "../ChartAccount";

export default interface ChartAccountValidator extends Validator {
    validate(chartAccount: ChartAccount): void;
}
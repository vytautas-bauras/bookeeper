import ChartAccount from "../ChartAccount";
import Validator from "../../../Validation/Validator";

export default interface ChartAccountValidator extends Validator {
    validate(chartAccount: ChartAccount): void;
}
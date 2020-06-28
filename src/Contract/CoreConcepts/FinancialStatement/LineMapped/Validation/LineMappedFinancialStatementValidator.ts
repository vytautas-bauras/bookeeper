import Validator from "../../../Validation/Validator";
import LineMappedFinancialStatement from "../LineMappedFinancialStatement";

export default interface LineMappedFinancialStatementValidator extends Validator {
    validate(lineMappedFinancialStatement: LineMappedFinancialStatement): void;
}
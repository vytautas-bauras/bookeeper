import Validator from "../../../../Validation/Validator";
import LineMappedFinancialStatement from "../LineMappedFinancialStatementDesign";

export default interface LineMappedFinancialStatementValidator extends Validator {
    validate(lineMappedFinancialStatement: LineMappedFinancialStatement): void;
}
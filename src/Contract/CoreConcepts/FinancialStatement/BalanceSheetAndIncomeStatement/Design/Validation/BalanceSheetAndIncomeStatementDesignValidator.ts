import Validator from "../../../../Validation/Validator";
import BalanceSheetAndIncomeStatementDesign from "../BalanceSheetAndIncomeStatementDesign";

export default interface BalanceSheetAndIncomeStatementValidator extends Validator {
    validate(balanceSheetAndIncomeStatement: BalanceSheetAndIncomeStatementDesign): void;
}
import Validator from "../../../Validation/Validator";
import BalanceSheetAndIncomeStatement from "../BalanceSheetAndIncomeStatement";

export default interface BalanceSheetAndIncomeStatementValidator extends Validator {
    validate(balanceSheetAndIncomeStatement: BalanceSheetAndIncomeStatement): void;
}
import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";
import Validatable from "../../Validation/Validatable";

export default interface BalanceSheetAndIncomeStatement extends Validatable {
    getBalanceSheet(): BalanceSheet;
    getIncomeStatement(): IncomeStatement;
}
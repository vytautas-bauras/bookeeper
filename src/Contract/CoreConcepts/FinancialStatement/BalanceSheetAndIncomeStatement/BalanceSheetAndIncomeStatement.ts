import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";

export default interface BalanceSheetAndIncomeStatement {
    getBalanceSheet(): BalanceSheet;
    getIncomeStatement(): IncomeStatement;
}
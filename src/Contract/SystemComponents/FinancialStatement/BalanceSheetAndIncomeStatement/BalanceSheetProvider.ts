import FinancialStatementProvider from "../FinancialStatementProvider";
import BalanceSheet from "../../../CoreConcepts/FinancialStatement/BalanceSheetAndIncomeStatement/BalanceSheet";

export default interface BalanceSheetProvider extends FinancialStatementProvider {
    getFinancialStatement(): BalanceSheet;
}
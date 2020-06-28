import FinancialStatementProvider from "../FinancialStatementProvider";
import IncomeStatement from "../../../CoreConcepts/FinancialStatement/BalanceSheetAndIncomeStatement/IncomeStatement";

export default interface IncomeStatementProvider extends FinancialStatementProvider {
    getFinancialStatement(): IncomeStatement;
}
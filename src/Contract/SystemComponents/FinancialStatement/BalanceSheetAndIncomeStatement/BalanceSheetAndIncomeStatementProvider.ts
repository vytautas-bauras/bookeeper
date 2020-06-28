import BalanceSheetAndIncomeStatement from "../../../CoreConcepts/FinancialStatement/BalanceSheetAndIncomeStatement/BalanceSheetAndIncomeStatement";

export default interface BalanceSheetAndIncomeStatementProvider {
    getBalanceSheetAndIncomeStatement(): BalanceSheetAndIncomeStatement;
}
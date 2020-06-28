import FinancialStatement from "../../CoreConcepts/FinancialStatement/FinancialStatement";

export default interface FinancialStatementProvider {
    getFinancialStatement(): FinancialStatement;
}
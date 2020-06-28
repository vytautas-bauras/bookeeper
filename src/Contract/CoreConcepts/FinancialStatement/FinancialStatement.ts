import FinancialStatementLine from "./FinancialStatementLine";

export default interface FinancialStatement {
    getFinancialStatementTitle(): string;
    getFinancialStatementLines(): FinancialStatementLine[];
}
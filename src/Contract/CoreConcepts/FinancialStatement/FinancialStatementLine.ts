export default interface FinancialStatementLine {
    getFinancialStatementLineTitle(): string;
    getFinancialStatementLineCode(): string|undefined;
    getChildFinancialStatementLines(): FinancialStatementLine[];
    getFinancialStatementLineTotal(): number;
}
export default interface FinancialStatementLineDesign {
    getPlannedFinancialStatementLineTitle(): string;
    getPlannedFinancialStatementLineCode(): string;
    getPlannedChildFinancialStatementLines(): FinancialStatementLineDesign[];
}
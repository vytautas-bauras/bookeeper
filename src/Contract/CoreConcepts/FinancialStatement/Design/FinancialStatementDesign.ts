import FinancialStatementLineDesign from "./FinancialStatementLineDesign";

export default interface FinancialStatementDesign {
    getPlannedFinancialStatementTitle(): string;
    getPlannedFinancialStatementLines(): FinancialStatementLineDesign[];
}
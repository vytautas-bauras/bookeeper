import ChartAccount from "../../../DoubleEntry/AccountsChart/ChartAccount";
import FinancialStatementLineDesign from "../FinancialStatementLineDesign";

export default interface MappedFinancialStatementLine extends FinancialStatementLineDesign {
    getPlannedChildFinancialStatementLines(): MappedFinancialStatementLine[];
    getChartAccountsMappedToStatementLine(): ChartAccount[];
}
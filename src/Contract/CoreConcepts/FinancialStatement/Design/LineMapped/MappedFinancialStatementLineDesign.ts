import ChartAccount from "../../../DoubleEntry/AccountsChart/ChartAccount";
import FinancialStatementLineDesign from "../FinancialStatementLineDesign";

export default interface MappedFinancialStatementLineDesign extends FinancialStatementLineDesign {
    getPlannedChildFinancialStatementLines(): MappedFinancialStatementLineDesign[];
    getChartAccountsMappedToStatementLine(): ChartAccount[];
}
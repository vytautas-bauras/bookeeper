import FinancialStatementLine from "../FinancialStatementLine";
import ChartAccount from "../../DoubleEntry/AccountsChart/ChartAccount";

export default interface MappedFinancialStatementLine extends FinancialStatementLine {
    getChartAccountsMappedToStatementLine(): ChartAccount[];
}
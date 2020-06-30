import MappedFinancialStatementLineDesign from "./MappedFinancialStatementLineDesign";
import AccountsChart from "../../../DoubleEntry/AccountsChart/AccountsChart";
import FinancialStatementDesign from "../FinancialStatementDesign";

export default interface LineMappedFinancialStatementDesign extends FinancialStatementDesign {
    getBaseAccountsChart(): AccountsChart;
    getPlannedFinancialStatementLines(): MappedFinancialStatementLineDesign[];
}
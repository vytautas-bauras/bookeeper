import MappedFinancialStatementLine from "./MappedFinancialStatementLine";
import AccountsChart from "../../DoubleEntry/AccountsChart/AccountsChart";
import FinancialStatement from "../FinancialStatement";

export default interface LineMappedFinancialStatement extends FinancialStatement {
    getBaseAccountsChart(): AccountsChart;
    getLines(): MappedFinancialStatementLine[];
}
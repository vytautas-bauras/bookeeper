import BalanceSheetDesign from "./BalanceSheetDesign";
import IncomeStatementDesign from "./IncomeStatementDesign";
import Validatable from "../../../Validation/Validatable";

export default interface BalanceSheetAndIncomeStatementDesign extends Validatable {
    getBalanceSheetDesign(): BalanceSheetDesign;
    getIncomeStatementDesign(): IncomeStatementDesign;
}
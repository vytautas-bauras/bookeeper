import FinancialStatementProvider from "../FinancialStatementProvider";
import LineMappedFinancialStatement from "../../../CoreConcepts/FinancialStatement/LineMapped/LineMappedFinancialStatement";

export default interface LineMappedFinancialStatementProvider extends FinancialStatementProvider {
    getFinancialStatement(): LineMappedFinancialStatement;
}
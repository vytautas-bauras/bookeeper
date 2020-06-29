import FinancialStatement from "../../CoreConcepts/FinancialStatement/FinancialStatement";
import FinancialStatementQuery from "./FinancialStatementQuery";

export default interface FinancialStatementProvider {
    getFinancialStatement(query: FinancialStatementQuery): FinancialStatement;
}
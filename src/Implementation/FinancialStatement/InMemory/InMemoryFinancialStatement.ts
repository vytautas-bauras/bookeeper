import FinancialStatement from "../../../Contract/CoreConcepts/FinancialStatement/FinancialStatement";
import FinancialStatementLine from "../../../Contract/CoreConcepts/FinancialStatement/FinancialStatementLine";

export default class InMemoryFinancialStatement implements FinancialStatement {
    constructor(
        private title: string,
        private lines: FinancialStatementLine[]
    ) {

    }

    getFinancialStatementTitle() {
        return this.title;
    }

    getFinancialStatementLines() {
        return this.lines;
    }
}
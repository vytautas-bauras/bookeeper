import FinancialStatementLine from "../../../Contract/CoreConcepts/FinancialStatement/FinancialStatementLine";

export default class InMemoryFinancialStatementLine implements FinancialStatementLine {
    constructor(
        private code: string,
        private title: string,
        private total: number,
        private childLines: FinancialStatementLine[]
    ) {

    }

    getFinancialStatementLineCode() {
        return this.code;
    }

    getFinancialStatementLineTitle() {
        return this.title;
    }

    getFinancialStatementLineTotal() {
        return this.total;
    }

    getChildFinancialStatementLines() {
        return this.childLines;
    }
}
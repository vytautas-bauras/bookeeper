import FinancialStatementLineDesign from "../../../../Contract/CoreConcepts/FinancialStatement/Design/FinancialStatementLineDesign";
import SerializableFinancialStatementLineDesign from "../Serializable/SerializableFinancialStatementLineDesign";

export default class SerializableFinancialStatementLineDesignAdapter implements FinancialStatementLineDesign {
    constructor(
        private serializedFinancialStatementLineDesign: SerializableFinancialStatementLineDesign
    ) {

    }

    getPlannedFinancialStatementLineCode() {
        return this.serializedFinancialStatementLineDesign.code;
    }

    getPlannedFinancialStatementLineTitle() {
        return this.serializedFinancialStatementLineDesign.title;
    }

    getPlannedChildFinancialStatementLines() {
        return this.serializedFinancialStatementLineDesign.childLines.map(
            serializedChildLine => new SerializableFinancialStatementLineDesignAdapter(serializedChildLine)
        );
    }
}
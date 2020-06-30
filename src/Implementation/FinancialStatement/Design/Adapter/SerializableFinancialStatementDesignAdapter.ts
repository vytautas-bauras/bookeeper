import FinancialStatementDesign from "../../../../Contract/CoreConcepts/FinancialStatement/Design/FinancialStatementDesign";
import SerializableFinancialStatementDesign from "../Serializable/SerializableFinancialStatementDesign";
import SerializableFinancialStatementLineDesignAdapter from "./SerializableFinancialStatementLineDesignAdapter";

export default class SerializableFinancialStatementDesignAdapter implements FinancialStatementDesign {
    constructor(
        private serializedFinancialStatementDesign: SerializableFinancialStatementDesign
    ) {

    }

    getPlannedFinancialStatementTitle() {
        return this.serializedFinancialStatementDesign.title;
    }

    getPlannedFinancialStatementLines() {
        return this.serializedFinancialStatementDesign.lines.map(
            serializedLine => new SerializableFinancialStatementLineDesignAdapter(serializedLine)
        );
    }
}
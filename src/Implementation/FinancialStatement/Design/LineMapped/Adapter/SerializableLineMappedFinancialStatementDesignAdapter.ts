import LineMappedFinancialStatementDesign from "../../../../../Contract/CoreConcepts/FinancialStatement/Design/LineMapped/LineMappedFinancialStatementDesign";
import SerializableLineMappedFinancialStatementDesign from "../Serializable/SerializableLineMappedFinancialStatementDesign";
import SearchableAccountsChart from "../../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import SerializableMappedFinancialStatementLineDesignAdapter from "./SerializableMappedFinancialStatementLineDesignAdapter";

export default class SerializableLineMappedFinancialStatementDesignAdapter implements LineMappedFinancialStatementDesign {
    constructor(
        private serializedLineMappedFinancialStatementDesign: SerializableLineMappedFinancialStatementDesign,
        private baseAccountsChart: SearchableAccountsChart
    ) {

    }

    getBaseAccountsChart() {
        return this.baseAccountsChart;
    }

    getPlannedFinancialStatementTitle() {
        return this.serializedLineMappedFinancialStatementDesign.title;
    }

    getPlannedFinancialStatementLines() {
        return this.serializedLineMappedFinancialStatementDesign.lines.map(
            serializedLine => new SerializableMappedFinancialStatementLineDesignAdapter(
                serializedLine,
                this.baseAccountsChart
            )
        );
    }
}
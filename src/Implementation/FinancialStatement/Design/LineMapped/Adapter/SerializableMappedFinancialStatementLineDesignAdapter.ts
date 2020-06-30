import MappedFinancialStatementLineDesign from "../../../../../Contract/CoreConcepts/FinancialStatement/Design/LineMapped/MappedFinancialStatementLineDesign";
import SerializableFinancialStatementLineDesignAdapter from "../../Adapter/SerializableFinancialStatementLineDesignAdapter";
import SerializableMappedFinancialStatementLineDesign from "../Serializable/SerializableMappedFinancialStatementLineDesign";
import SearchableAccountsChart from "../../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";

export default class SerializableMappedFinancialStatementLineDesignAdapter extends SerializableFinancialStatementLineDesignAdapter implements MappedFinancialStatementLineDesign {
    constructor(
        private serializedMappedFinancialStatementLine: SerializableMappedFinancialStatementLineDesign,
        private searchableAccountsChart: SearchableAccountsChart
    ) {
        super(serializedMappedFinancialStatementLine);
    }

    getPlannedChildFinancialStatementLines() {
        return this.serializedMappedFinancialStatementLine.childLines.map(
            serializedChildLine => new SerializableMappedFinancialStatementLineDesignAdapter(
                serializedChildLine, 
                this.searchableAccountsChart
            )
        );
    }

    getChartAccountsMappedToStatementLine() {
        return this.serializedMappedFinancialStatementLine.mappedChartAccountCodes.map(
            accountCode => this.searchableAccountsChart.getAccountByCode(accountCode)
        );
    }
}
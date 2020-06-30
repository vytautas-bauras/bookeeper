import SerializableBalanceSheetDesign from "../Serializable/SerializableBalanceSheetDesign";
import SearchableAccountsChart from "../../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import SerializableLineMappedFinancialStatementDesignAdapter from "../../../Design/LineMapped/Adapter/SerializableLineMappedFinancialStatementDesignAdapter";

export default class SerializableBalanceSheetDesignAdapter extends SerializableLineMappedFinancialStatementDesignAdapter {
    constructor(
        serializedBalanceSheetDesign: SerializableBalanceSheetDesign,
        searchableAccountsChart: SearchableAccountsChart
    ) {
        super(serializedBalanceSheetDesign, searchableAccountsChart);
    }
}
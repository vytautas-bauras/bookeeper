import SerializableLiabilitiesAccountAdapter from "./Account/SerializableLiabilitiesAccountAdapter";
import SerializableExpensesAccountAdapter from "./Account/SerializableExpensesAccountAdapter";
import SerializableEquityAccountAdapter from "./Account/SerializableEquityAccountAdapter";
import SerializableRevenuesAccountAdapter from "./Account/SerializableRevenuesAccountAdapter";
import SerializableAssetsAccountAdapter from "./Account/SerializableAssetsAccountAdapter";
import SerializableAccountsChart from "../Serializable/SerializableAccountsChart";
import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";

export default class SerializableAccountsChartAdapter implements AccountsChart {
    constructor(protected serializedAccountsChart: SerializableAccountsChart) {

    }

    getAssets() {
        return new SerializableAssetsAccountAdapter(this.serializedAccountsChart.assets);
    }

    getRevenues() {
        return new SerializableRevenuesAccountAdapter(this.serializedAccountsChart.revenues);
    }

    getEquity() {
        return new SerializableEquityAccountAdapter(this.serializedAccountsChart.equity);
    }

    getExpenses() {
        return new SerializableExpensesAccountAdapter(this.serializedAccountsChart.expenses);
    }

    getLiabilities() {
        return new SerializableLiabilitiesAccountAdapter(this.serializedAccountsChart.liabilities);
    }
}
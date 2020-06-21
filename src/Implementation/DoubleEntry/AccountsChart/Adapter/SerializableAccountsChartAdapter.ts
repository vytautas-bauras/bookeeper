export default classSerializableAccountsChartAdapter implements AccountsChart {
    constructor(protected serializedAccountsChart: SerializableAccountsChart) {

    }

    getAssets() {
        return new SerializableAssetsAccountAdapter(this.serializedAccountsChart.assets);
    }

    getRevenues() {
        return new SerializableRevenuesAccountAdapter(this.serializedAccountsChart.assets);
    }

    getEquity() {
        return new SerializableEquityAccountAdapter(this.serializedAccountsChart.assets);
    }

    getExpenses() {
        return new SerializableExpensesAccountAdapter(this.serializedAccountsChart.assets);
    }

    getLiabilities() {
        return new SerializableLiabilitiesAccountAdapter(this.serializedAccountsChart.assets);
    }
}
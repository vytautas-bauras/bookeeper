interface MappedAccountsCharts extends AccountsChart, Validatable {
    getCurrentLedgerAccountsChart(): AccountsChart;
    getDifferentAccountsChart(): AccountsChart;
}
interface SearchableAccountsChart extends AccountsChart, ChartAccountListProvider {
    getAccountByName(accountName: string): ChartAccount;
}
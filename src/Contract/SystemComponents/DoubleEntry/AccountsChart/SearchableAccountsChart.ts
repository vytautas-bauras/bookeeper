interface SearchableAccountsChart extends AccountsChart {
    getAccountList(): {[accountName: string]: ChartAccount};
    getAccountByName(accountName: string): ChartAccount;
}
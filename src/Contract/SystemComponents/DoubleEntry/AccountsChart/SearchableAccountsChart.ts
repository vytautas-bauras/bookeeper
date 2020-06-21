export default interface SearchableAccountsChart extends AccountsChart, ChartAccountListProvider {
    getAccountByName(accountCode: string): ChartAccount;
}
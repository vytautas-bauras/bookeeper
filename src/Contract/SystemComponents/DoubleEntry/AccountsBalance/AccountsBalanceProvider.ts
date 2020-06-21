interface AccountsBalanceProvider {
    getAccountsBalance(from?: Date, to?: Date, mapping?: MappedAccountsCharts): AccountsBalance;
}
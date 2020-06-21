interface AccountsBalanceProvider {
    getAccountsBalance(from?: Date, to?: Date): AccountsBalance;
}
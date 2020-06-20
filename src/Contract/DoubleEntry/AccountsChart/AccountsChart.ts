interface AccountsChart {
    getAssets(): AssetsAccount;
    getLiabilities(): LiabilitiesAccount;
    getEquity(): EquityAccount;
    getRevenues(): RevenuesAccount;
    getExpenses(): ExpensesAccount;
}
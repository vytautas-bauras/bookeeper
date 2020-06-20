interface AccountsBalance extends Validatable {
    getAccountsChart(): AccountsChart;
    getLedger(): Ledger;
    
    getAssets(): AssetsAccountBalance;
    getLiabilities(): LiabilitiesAccountBalance;
    getEquity(): EquityAccountBalance;
    getRevenues(): RevenuesAccountBalance;
    getExpenses(): ExpensesAccountBalance;
}
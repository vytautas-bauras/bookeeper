interface AccountsBalance extends Validatable {    
    getAssets(): AssetsAccountBalance;
    getLiabilities(): LiabilitiesAccountBalance;
    getEquity(): EquityAccountBalance;
    getRevenues(): RevenuesAccountBalance;
    getExpenses(): ExpensesAccountBalance;
}
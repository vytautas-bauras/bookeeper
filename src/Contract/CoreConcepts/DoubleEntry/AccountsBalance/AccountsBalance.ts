interface AccountsBalance extends Validatable {    
    getAssets(): AccountBalance<AssetsAccount>;
    getLiabilities(): AccountBalance<LiabilitiesAccount>;
    getEquity(): AccountBalance<EquityAccount>;
    getRevenues(): AccountBalance<RevenuesAccount>;
    getExpenses(): AccountBalance<ExpensesAccount>;
}
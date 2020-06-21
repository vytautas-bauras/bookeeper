interface SerializableAccountsChart {
    assets: SerializableAccount<AccountType.Assets>;
    equity: SerializableAccount<AccountType.Equity>;
    liabilities: SerializableAccount<AccountType.Liabilities>;
    revenues: SerializableAccount<AccountType.Revenues>;
    expenses: SerializableAccount<AccountType.Expenses>;
}
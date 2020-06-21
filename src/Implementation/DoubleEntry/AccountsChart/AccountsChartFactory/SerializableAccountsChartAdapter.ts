class SerializableAccountsChartAdapter implements AccountsChart {
    constructor(protected accountFactory: AccountFactory, protected serializedAccountsChart: SerializableAccountsChart) {

    }

    getAssets(): AssetsAccount {
        return this.validateAndCreate(this.serializedAccountsChart.assets, AccountType.Assets);
    }

    getRevenues(): RevenuesAccount {
        return this.validateAndCreate(this.serializedAccountsChart.revenues, AccountType.Revenues);
    }

    getEquity(): EquityAccount {
        return this.validateAndCreate(this.serializedAccountsChart.equity, AccountType.Equity);
    }

    getExpenses(): ExpensesAccount {
        return this.validateAndCreate(this.serializedAccountsChart.expenses, AccountType.Expenses);
    }

    getLiabilities(): LiabilitiesAccount {
        return this.validateAndCreate(this.serializedAccountsChart.liabilities, AccountType.Liabilities);
    }

    protected validateAndCreate(serializedAccount: SerializableAccount<any>, type: AccountType) {
        if(serializedAccount.accountType !== type) {
            throw new AccountsChartCategoryMismatchError();
        }

        return this.accountFactory.createAccount(serializedAccount);
    }
}
import CalculatedLedgerAccountBalance from "./AccountBalance/CalculatedLedgerAccountBalance";
import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";
import AccountBalance from "Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import AssetsAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/AssetsAccount";
import EquityAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/EquityAccount";
import RevenuesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/RevenuesAccount";
import LiabilitiesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/LiabilitiesAccount";
import ExpensesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ExpensesAccount";
import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import { TemporaryAccountBalanceMap } from "./TemporaryAccountsBalanceMapInitializer";
import AccountsBalance from "Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";

export default class ReadOnlyLedgerAccountsBalanceAdapter implements AccountsBalance {
    private assets: AccountBalance<AssetsAccount>;
    private equity: AccountBalance<EquityAccount>;
    private revenues: AccountBalance<RevenuesAccount>;
    private liabilities: AccountBalance<LiabilitiesAccount>;
    private expenses: AccountBalance<ExpensesAccount>;

    constructor(
        private accountsChart: AccountsChart,
        private accountBalanceMap: TemporaryAccountBalanceMap
    ) {
        this.assets = this.initLedgerAccountBalanceRecursive(this.accountsChart.getAssets());     
        this.equity = this.initLedgerAccountBalanceRecursive(this.accountsChart.getEquity());
        this.revenues = this.initLedgerAccountBalanceRecursive(this.accountsChart.getRevenues());
        this.liabilities = this.initLedgerAccountBalanceRecursive(this.accountsChart.getLiabilities());
        this.expenses = this.initLedgerAccountBalanceRecursive(this.accountsChart.getExpenses());
    }

    /**
     * Initialize the read-only calculated account balances into a tree
     * 
     * @param account 
     */
    initLedgerAccountBalanceRecursive(account: ChartAccount): CalculatedLedgerAccountBalance<any> {
        const balance = this.accountBalanceMap[account.getAccountCode()];

        return new CalculatedLedgerAccountBalance(
            balance, 
            account.getChildAccounts().map(childAccount => {
                return this.initLedgerAccountBalanceRecursive(childAccount)
            })
        );
    }

    getAssets() {
        return this.assets;
    }

    getEquity() {
        return this.equity;
    }

    getRevenues() {
        return this.revenues;
    }

    getExpenses() {
        return this.expenses;
    }

    getLiabilities() {
        return this.liabilities;
    }
}
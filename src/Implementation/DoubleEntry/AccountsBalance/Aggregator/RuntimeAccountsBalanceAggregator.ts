import AccountsBalanceAggregator from "../../../../Contract/SystemComponents/DoubleEntry/AccountsBalance/Aggregator/AccountsBalanceAggregator";
import AccountsBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import AccountBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class RuntimeAccountsBalanceAggregator implements AccountsBalanceAggregator {
    constructor(
        private accountsBalance: AccountsBalance
    ) {

    }

    getAccountBalanceSum(accounts: ChartAccount[]) {
        return this.sumByRootAccountType(ChartAccountType.Assets, accounts)
            + this.sumByRootAccountType(ChartAccountType.Liabilities, accounts)
            + this.sumByRootAccountType(ChartAccountType.Equity, accounts)
            + this.sumByRootAccountType(ChartAccountType.Revenues, accounts)
            + this.sumByRootAccountType(ChartAccountType.Expenses, accounts);
    }

    private sumByRootAccountType(accountType: ChartAccountType, accounts: ChartAccount[]) {
        return this.sumAccountBalanceRecursive(this.accountsBalance.getRootBalanceByAccountType(accountType), accounts);
    }

    private sumAccountBalanceRecursive(accountBalance: AccountBalance, accounts: ChartAccount[]): number {
        let sum = 0;
        if(accounts.indexOf(accountBalance.getChartAccount()) !== -1) {
            sum += accountBalance.getBalance();
        }

        return sum + accountBalance.getChildAccountBalances().reduce((acc, balance) => {
            return acc + this.sumAccountBalanceRecursive(balance, accounts);
        }, 0);
    }
}
import CalculatedLedgerAccountBalance from "./AccountBalance/CalculatedLedgerAccountBalance";
import { TemporaryAccountBalanceMap } from "./TemporaryAccountsBalanceMapInitializer";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import AccountsBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";
import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

type rootAccountBalances = {
    [key in ChartAccountType]: CalculatedLedgerAccountBalance
};

export default class ReadOnlyLedgerAccountsBalanceAdapter implements AccountsBalance {
    private rootAccountBalances: rootAccountBalances;

    constructor(
        public readonly accountsChart: AccountsChart,
        private accountBalanceMap: TemporaryAccountBalanceMap
    ) {
        this.rootAccountBalances = {
            [ChartAccountType.Assets]: this.initLedgerAccountBalanceRecursive(accountsChart.getRootAccountByType(ChartAccountType.Assets)),
            [ChartAccountType.Equity]: this.initLedgerAccountBalanceRecursive(accountsChart.getRootAccountByType(ChartAccountType.Equity)),
            [ChartAccountType.Liabilities]: this.initLedgerAccountBalanceRecursive(accountsChart.getRootAccountByType(ChartAccountType.Liabilities)),
            [ChartAccountType.Revenues]: this.initLedgerAccountBalanceRecursive(accountsChart.getRootAccountByType(ChartAccountType.Revenues)),
            [ChartAccountType.Expenses]: this.initLedgerAccountBalanceRecursive(accountsChart.getRootAccountByType(ChartAccountType.Expenses)),
        }
    }

    /**
     * Initialize the read-only calculated account balances into a tree
     * 
     * @param account 
     */
    private initLedgerAccountBalanceRecursive(account: ChartAccount): CalculatedLedgerAccountBalance {
        const balance = this.accountBalanceMap[account.getAccountCode()];

        return new CalculatedLedgerAccountBalance(
            balance, 
            account.getChildAccounts().map(childAccount => {
                return this.initLedgerAccountBalanceRecursive(childAccount)
            })
        );
    }

    getRootBalanceByAccountType(accountType: ChartAccountType) {
        return this.rootAccountBalances[accountType];
    }
}
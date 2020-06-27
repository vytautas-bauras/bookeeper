import SearchableAccountsChart from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import { TemporaryAccountBalanceMap } from "./TemporaryAccountsBalanceMapInitializer";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import InMemoryAccountBalance from "../InMemory/InMemoryAccountBalance";
import InMemoryAccountsBalance from "../InMemory/InMemoryAccountsBalance";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class ReadOnlyAccountsBalanceFactory {
    constructor(private searchableAccountsChart: SearchableAccountsChart) {

    }

    createFromTemporary(temporary: TemporaryAccountBalanceMap) {
        return new InMemoryAccountsBalance(
            this.initByRootAccountType(temporary, ChartAccountType.Assets),
            this.initByRootAccountType(temporary, ChartAccountType.Liabilities),
            this.initByRootAccountType(temporary, ChartAccountType.Equity),
            this.initByRootAccountType(temporary, ChartAccountType.Revenues),
            this.initByRootAccountType(temporary, ChartAccountType.Expenses)
        );
    }

    private initByRootAccountType(temporary: TemporaryAccountBalanceMap, accountType: ChartAccountType) {
        return this.initLedgerAccountBalanceRecursive(
            temporary, 
            this.searchableAccountsChart.getRootAccountByType(accountType)
        );
    }

        /**
     * Initialize the read-only calculated account balances into a tree
     * 
     * @param account 
     */
    private initLedgerAccountBalanceRecursive(
        temporary: TemporaryAccountBalanceMap, 
        account: ChartAccount
    ): InMemoryAccountBalance {
        const balance = temporary[account.getAccountCode()];

        return new InMemoryAccountBalance(
            balance.account,
            balance.debit,
            balance.credit,
            balance.balance,
            account.getChildAccounts().map(childAccount => {
                return this.initLedgerAccountBalanceRecursive(temporary, childAccount)
            })
        );
    }
}
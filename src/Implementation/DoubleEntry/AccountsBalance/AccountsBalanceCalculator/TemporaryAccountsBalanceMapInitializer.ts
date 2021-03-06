import TemporaryLedgerAccountBalance from "./AccountBalance/TemporaryLedgerAccountBalance";
import ChartAccountListProvider from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/ChartAccountListProvider";

export type TemporaryAccountBalanceMap = {[accountCode: string]: TemporaryLedgerAccountBalance};

export default class TemporaryAccountsBalanceMapInitializer {
    constructor(protected accountListProvider: ChartAccountListProvider) {

    }

    initializeTemporaryAccountsBalanceMap(): TemporaryAccountBalanceMap {
        const accountList = this.accountListProvider.getAccountList();

        const accountsBalance: TemporaryAccountBalanceMap = {};

        Object.keys(accountList).forEach(accountCode => {
            accountsBalance[accountCode] = {
                account: accountList[accountCode],
                debit: 0,
                credit: 0,
                balance: 0
            }
        });

        return accountsBalance;
    }
}
import { TemporaryAccountBalanceMap } from "./TemporaryAccountsBalanceMapInitializer";
import AccountNotInChartError from "./AccountNotInChartError";
import LedgerTransaction from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";

export default class AccountsBalanceLedgerTransactionProcessor {
    constructor(
        private temporaryBalanceMap: TemporaryAccountBalanceMap
    ) {

    }

    /**
     * Process transactions by aggregating them into accounts present in the map
     * 
     * @param transactions 
     */
    processTransactions(transactions: LedgerTransaction[]) {        
        for(let txIt = 0; txIt < transactions.length; txIt++) {
            const tx = transactions[txIt];
            const entries = tx.getTransactionEntries();

            for(let entryIt = 0; entryIt < entries.length; entryIt++) {
                const entry = entries[entryIt];
                const accountBalance = this.temporaryBalanceMap[entry.getLedgerEntryAccount().getAccountCode()];
                if(!accountBalance) throw new AccountNotInChartError();

                accountBalance.balance += entry.getLedgerEntryAmount();
            }
        }
    }
}
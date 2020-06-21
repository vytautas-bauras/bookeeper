import { TemporaryAccountBalanceMap } from "./TemporaryAccountsBalanceMapInitializer";
import LedgerTransaction from "Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";
import AccountNotInChartError from "./AccountNotInChartError";

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

                const amount = entry.getLedgerEntryAmount();
                accountBalance.balance += amount;

                if(amount > 0) 
                    accountBalance.credit = amount; 
                else 
                    accountBalance.debit = amount;
            }
        }
    }
}
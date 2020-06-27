import TemporaryAccountsBalanceMapInitializer from "./TemporaryAccountsBalanceMapInitializer";
import AccountsBalanceLedgerTransactionProcessor from "./AccountsBalanceLedgerTransactionProcessor";
import LedgerTransaction from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";
import ReadOnlyAccountsBalanceFactory from "./ReadOnlyAccountsBalanceFactory";

export default class AccountsBalanceCalculator {
    constructor(
        private scratchFactory: TemporaryAccountsBalanceMapInitializer,
        private readOnlyFactory: ReadOnlyAccountsBalanceFactory
    ) {
    }

    /**
     * Processes transactions and provides a read-only calculated balance of all accounts
     * 
     * @param transactions 
     */
    calculateAccountsBalance(transactions: LedgerTransaction[]) {
        const scratch = this.scratchFactory.initializeTemporaryAccountsBalanceMap();
        const processor = new AccountsBalanceLedgerTransactionProcessor(scratch);
        processor.processTransactions(transactions);
        
        return this.readOnlyFactory.createFromTemporary(scratch);
    }
}
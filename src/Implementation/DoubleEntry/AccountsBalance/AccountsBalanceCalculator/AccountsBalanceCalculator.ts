import TemporaryAccountsBalanceMapInitializer from "./TemporaryAccountsBalanceMapInitializer";
import AccountsBalanceLedgerTransactionProcessor from "./AccountsBalanceLedgerTransactionProcessor";
import ReadOnlyLedgerAccountsBalanceAdapter from "./ReadOnlyLedgerAccountsBalanceAdapter";
import SearchableAccountsChart from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import LedgerTransaction from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";

export default class AccountsBalanceCalculator {
    private scratchFactory: TemporaryAccountsBalanceMapInitializer;

    constructor(
        private searchableAccountsChart: SearchableAccountsChart
    ) {
        this.scratchFactory = new TemporaryAccountsBalanceMapInitializer(searchableAccountsChart);
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
        
        return new ReadOnlyLedgerAccountsBalanceAdapter(this.searchableAccountsChart, scratch);
    }
}
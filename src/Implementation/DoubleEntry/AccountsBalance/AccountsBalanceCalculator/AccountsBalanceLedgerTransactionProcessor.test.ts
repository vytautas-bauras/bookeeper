import tap from 'tap';
import { TemporaryAccountBalanceMap } from './TemporaryAccountsBalanceMapInitializer';
import SampleChartOfAccounts from 'Implementation/DoubleEntry/AccountsChart/Sample/SampleChartOfAccounts';
import AccountsBalanceLedgerTransactionProcessor from './AccountsBalanceLedgerTransactionProcessor';
import InMemoryLedgerTransaction from 'Implementation/DoubleEntry/Ledger/InMemory/InMemoryLedgerTransaction';
import InMemoryLedgerEntry from 'Implementation/DoubleEntry/Ledger/InMemory/InMemoryLedgerEntry';

const accountsChart = SampleChartOfAccounts;

const assetsAccount = accountsChart.getAssets();

const scratch: TemporaryAccountBalanceMap = {
    [assetsAccount.getAccountCode()]: {
        account: assetsAccount,
        balance: 0,
        credit: 0,
        debit: 0
    }
};

const processor = new AccountsBalanceLedgerTransactionProcessor(scratch);
processor.processTransactions([
    new InMemoryLedgerTransaction(
        new Date(),
        'test',
        [
            new InMemoryLedgerEntry(assetsAccount)
        ]
    )
]);
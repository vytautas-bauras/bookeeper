import tap from 'tap';
import { TemporaryAccountBalanceMap } from './TemporaryAccountsBalanceMapInitializer';
import AccountsBalanceLedgerTransactionProcessor from './AccountsBalanceLedgerTransactionProcessor';
import SampleChartOfAccounts from '../../AccountsChart/Sample/SampleChartOfAccounts';
import { ChartAccountType } from '../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType';
import SampleTransactions from '../../Ledger/Sample/SampleTransactions';

const accountsChart = SampleChartOfAccounts;

const assetsAccount = accountsChart.getRootAccountByType(ChartAccountType.Assets);
const equityAccount = accountsChart.getRootAccountByType(ChartAccountType.Equity);
const expensesAccount = accountsChart.getRootAccountByType(ChartAccountType.Expenses);

const scratch: TemporaryAccountBalanceMap = {
    [assetsAccount.getAccountCode()]: {
        account: assetsAccount,
        balance: 0,
        credit: 0,
        debit: 0
    },
    [equityAccount.getAccountCode()]: {
        account: equityAccount,
        balance: 0,
        credit: 0,
        debit: 0
    },
    [expensesAccount.getAccountCode()]: {
        account: equityAccount,
        balance: 0,
        credit: 0,
        debit: 0
    }
};

const processor = new AccountsBalanceLedgerTransactionProcessor(scratch);
processor.processTransactions(SampleTransactions());

tap.equals(scratch[assetsAccount.getAccountCode()].balance, 500);
tap.equals(scratch[equityAccount.getAccountCode()].balance, -500);
tap.equals(scratch[expensesAccount.getAccountCode()].balance, 0);

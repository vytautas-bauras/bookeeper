import tap from 'tap';
import ChartAccountListProvider, { ChartAccountList } from 'Contract/SystemComponents/DoubleEntry/AccountsChart/ChartAccountListProvider';
import TemporaryLedgerAccountBalance from './AccountBalance/TemporaryLedgerAccountBalance';
import { ChartAccount } from 'Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount';
import TemporaryAccountsBalanceMapInitializer from './TemporaryAccountsBalanceMapInitializer';

const childAccounts = [
    {
        getAccountCode() {
            return "101";
        },
        getAccountTitle() {
            return "Cash"
        },
        getChildAccounts() {
            return [];
        },
        getParentAccount() {
            return accountList["100"];
        }
    },
    {
        getAccountCode() {
            return "120";
        },
        getAccountTitle() {
            return "Accounts Receivable"
        },
        getChildAccounts() {
            return [];
        },
        getParentAccount() {
            return accountList["100"];
        }
    }
];

const assetsAccount = {
    getAccountCode() {
        return "100"
    },
    getAccountTitle() {
        return "Assets";
    },
    getChildAccounts() {
        return childAccounts;
    },
    getParentAccount() {
        return undefined;
    }
};

const accountList: ChartAccountList = {
    "100": assetsAccount,
    "101": childAccounts[0],
    "120": childAccounts[1]
};

function validateTemporaryAccountBalance(balance: TemporaryLedgerAccountBalance<any>, expectedAccount: ChartAccount) {
    tap.equals(balance.account, expectedAccount);
    tap.equals(balance.balance, 0);
    tap.equals(balance.credit, 0);
    tap.equals(balance.debit, 0);
}

const initializer = new TemporaryAccountsBalanceMapInitializer({
    getAccountList() {
        return accountList
    }
} as ChartAccountListProvider);

const map = initializer.initializeTemporaryAccountsBalanceMap();
validateTemporaryAccountBalance(map["100"], assetsAccount);
validateTemporaryAccountBalance(map["101"], childAccounts[0]);
validateTemporaryAccountBalance(map["120"], childAccounts[1]);
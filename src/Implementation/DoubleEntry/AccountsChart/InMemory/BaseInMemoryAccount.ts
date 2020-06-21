import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";
import BaseAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/BaseAccount";

export default abstract class BaseInMemoryAccount<T extends ChartAccount> implements BaseAccount {
    public parentAccount?: BaseInMemoryAccount<T>;

    constructor(
        public readonly accountCode: string,
        public readonly accountTitle: string,
        public readonly childAccounts: BaseInMemoryAccount<T>[] = []
    ) {
        childAccounts.forEach(acc => acc.parentAccount = this);
    }

    getAccountCode() {
        return this.accountCode;
    }

    getAccountTitle() {
        return this.accountTitle;
    }

    getParentAccount() {
        return this.parentAccount;
    }

    getChildAccounts() {
        return this.childAccounts;
    }
}
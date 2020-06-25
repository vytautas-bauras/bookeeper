import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default abstract class BaseInMemoryAccount implements ChartAccount {
    public parentAccount?: BaseInMemoryAccount;

    constructor(
        public readonly accountCode: string,
        public readonly accountTitle: string,
        public readonly childAccounts: BaseInMemoryAccount[] = []
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

    abstract getAccountType(): ChartAccountType;
}
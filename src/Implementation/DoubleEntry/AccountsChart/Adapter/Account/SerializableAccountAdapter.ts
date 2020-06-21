abstract class SerializableAccountAdapter<T extends ChartAccount> implements BaseAccount {
    constructor(
        protected serializedAccount: SerializableAccount,
        protected parentAccount?: T
    ) {

    }

    getAccountCode() {
        return this.serializedAccount.accountCode;
    }

    getAccountTitle() {
        return this.serializedAccount.accountTitle;
    }

    getChildAccounts(): T[] {
        return this.serializedAccount
            .childAccounts
            .map(child => this.createChild(this.serializedAccount));
    }

    getParentAccount(): T|undefined {
        return this.parentAccount;
    }

    abstract createChild(serializedAccount: SerializableAccount): T;
}
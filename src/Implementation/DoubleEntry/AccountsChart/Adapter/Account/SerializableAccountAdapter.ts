abstract class SerializableAccountAdapter<T extends ChartAccount> {
    constructor(
        protected serializedAccount: SerializableAccount,
        protected parentAccount?: T
    ) {

    }

    getAccountCode() {
        return this.serializedAccount.accountCode;
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
abstract class SerializableAccountAdapter<T extends BaseAccount> {
    constructor(
        protected accountFactory: AccountFactory,
        protected serializedAccount: SerializableAccount<any>,
        protected parentAccount?: T
    ) {

    }

    getAccountType() {
        return this.serializedAccount.accountType;
    }

    getAccountName() {
        return this.serializedAccount.accountName;
    }

    getChildAccounts(): T[] {
        return this.serializedAccount
            .childAccounts
            .map(child => this.accountFactory.createAccount(child, this) as T);
    }

    getParentAccount(): T|undefined {
        return this.parentAccount;
    }
}
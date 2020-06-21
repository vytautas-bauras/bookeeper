class AccountFactory {
    createAccount(serializedAccount: SerializableAccount<any>, parentAccount?: SerializableAccountAdapter<BaseAccount>): ChartAccount {
        let account: SerializableAccountAdapter<BaseAccount>|undefined;

        if(serializedAccount.accountType === AccountType.Assets) {
            account = new SerializableAssetsAccountAdapter(this, serializedAccount, parentAccount);
        }

        if(!account) {
            throw new AccountTypeDoesNotExistError();
        }

        if(parentAccount && account.getAccountType() !== parentAccount.getAccountType()) {
            throw new AccountTypeMismatchError();
        }

        return account;
    }
}   
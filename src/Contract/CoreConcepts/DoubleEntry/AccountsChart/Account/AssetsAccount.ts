interface AssetsAccount extends BaseAccount {
    getParentAccount(): AssetsAccount;
    getChildAccounts(): AssetsAccount[];
}
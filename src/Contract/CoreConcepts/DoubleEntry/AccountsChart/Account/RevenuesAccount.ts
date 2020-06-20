interface RevenuesAccount extends BaseAccount {
    getParentAccount(): RevenuesAccount;
    getChildAccounts(): RevenuesAccount[];
}
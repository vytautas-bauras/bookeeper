interface BaseAccount {
    getAccountName(): string;
    getParentAccount(): BaseAccount;
    getChildAccounts(): BaseAccount[];
}
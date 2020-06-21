interface BaseAccount {
    getAccountName(): string;
    getParentAccount(): BaseAccount|undefined;
    getChildAccounts(): BaseAccount[];
}
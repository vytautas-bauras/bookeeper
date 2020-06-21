interface BaseAccount {
    getAccountCode(): string;
    getParentAccount(): BaseAccount|undefined;
    getChildAccounts(): BaseAccount[];
}
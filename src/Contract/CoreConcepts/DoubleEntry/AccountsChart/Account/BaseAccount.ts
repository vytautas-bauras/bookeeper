interface BaseAccount {
    getAccountCode(): string;
    getAccountTitle(): string;
    getParentAccount(): BaseAccount|undefined;
    getChildAccounts(): BaseAccount[];
}
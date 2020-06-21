interface RevenuesAccount extends BaseAccount {
    getParentAccount(): RevenuesAccount|undefined;
    getChildAccounts(): RevenuesAccount[];
}
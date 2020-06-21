interface AssetsAccount extends BaseAccount {
    getParentAccount(): AssetsAccount|undefined;
    getChildAccounts(): AssetsAccount[];
}
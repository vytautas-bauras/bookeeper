interface EquityAccount extends BaseAccount {
    getParentAccount(): EquityAccount|undefined;
    getChildAccounts(): EquityAccount[];
}
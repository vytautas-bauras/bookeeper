interface EquityAccount extends BaseAccount {
    getParentAccount(): EquityAccount;
    getChildAccounts(): EquityAccount[];
}
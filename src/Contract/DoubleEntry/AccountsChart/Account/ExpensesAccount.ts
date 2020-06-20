interface ExpensesAccount extends BaseAccount {
    getParentAccount(): ExpensesAccount;
    getChildAccounts(): ExpensesAccount[];
}
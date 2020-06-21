interface ExpensesAccount extends BaseAccount {
    getParentAccount(): ExpensesAccount|undefined;
    getChildAccounts(): ExpensesAccount[];
}
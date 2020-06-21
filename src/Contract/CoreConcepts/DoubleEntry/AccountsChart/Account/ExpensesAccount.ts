import BaseAccount from "./BaseAccount";

export default interface ExpensesAccount extends BaseAccount {
    getParentAccount(): ExpensesAccount|undefined;
    getChildAccounts(): ExpensesAccount[];
}
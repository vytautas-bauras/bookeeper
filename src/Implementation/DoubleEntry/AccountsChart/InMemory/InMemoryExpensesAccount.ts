import BaseInMemoryAccount from "./BaseInMemoryAccount";
import ExpensesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ExpensesAccount";

export default class InMemoryExpensesAccount extends BaseInMemoryAccount<ExpensesAccount> implements ExpensesAccount {

}
import BaseInMemoryAccount from "./BaseInMemoryAccount";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryExpensesAccount extends BaseInMemoryAccount {
    getAccountType() {
        return ChartAccountType.Expenses;
    }
}
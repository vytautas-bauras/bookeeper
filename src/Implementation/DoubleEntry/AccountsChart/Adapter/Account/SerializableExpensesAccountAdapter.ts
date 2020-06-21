import SerializableAccount from "../../Serializable/SerializableAccount";
import SerializableAccountAdapter from "./SerializableAccountAdapter";
import ExpensesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ExpensesAccount";

export default class SerializableExpensesAccountAdapter extends SerializableAccountAdapter<ExpensesAccount> implements ExpensesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableExpensesAccountAdapter {
        return new SerializableExpensesAccountAdapter(serializedAccount, this);
    }
}
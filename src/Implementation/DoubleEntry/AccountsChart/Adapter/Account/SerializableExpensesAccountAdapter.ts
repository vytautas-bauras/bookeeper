export default classSerializableExpensesAccountAdapter extends SerializableAccountAdapter<ExpensesAccount> implements ExpensesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableExpensesAccountAdapter {
        return new SerializableExpensesAccountAdapter(serializedAccount, this);
    }
}
export default classSerializableRevenuesAccountAdapter extends SerializableAccountAdapter<RevenuesAccount> implements RevenuesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableRevenuesAccountAdapter {
        return new SerializableRevenuesAccountAdapter(serializedAccount, this);
    }
}
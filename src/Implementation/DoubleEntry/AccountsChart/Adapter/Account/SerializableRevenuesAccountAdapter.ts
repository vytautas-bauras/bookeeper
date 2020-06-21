class SerializableRevenuesAccountAdapter extends SerializableAccountAdapter<RevenuesAccount> implements RevenuesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableRevenuesAccountAdapter {
        return new SerializableRevenuesAccountAdapter(serializedAccount, this);
    }
}
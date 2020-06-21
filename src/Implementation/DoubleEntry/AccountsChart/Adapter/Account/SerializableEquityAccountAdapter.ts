class SerializableEquityAccountAdapter extends SerializableAccountAdapter<EquityAccount> implements EquityAccount {
    createChild(serializedAccount: SerializableAccount): SerializableEquityAccountAdapter {
        return new SerializableEquityAccountAdapter(serializedAccount, this);
    }
}
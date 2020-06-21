export default classSerializableLiabilitiesAccountAdapter extends SerializableAccountAdapter<LiabilitiesAccount> implements LiabilitiesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableLiabilitiesAccountAdapter {
        return new SerializableLiabilitiesAccountAdapter(serializedAccount, this);
    }
}
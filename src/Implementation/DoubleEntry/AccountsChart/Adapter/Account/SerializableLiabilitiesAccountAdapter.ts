class SerializableLiabilitiesAccountAdapter extends SerializableAccountAdapter<LiabilitiesAccount> implements LiabilitiesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableLiabilitiesAccountAdapter {
        return new SerializableLiabilitiesAccountAdapter(serializedAccount, this);
    }
}
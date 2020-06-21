class SerializableAssetsAccountAdapter extends SerializableAccountAdapter<AssetsAccount> implements AssetsAccount {
    createChild(serializedAccount: SerializableAccount): SerializableAssetsAccountAdapter {
        return new SerializableAssetsAccountAdapter(serializedAccount, this);
    }
}
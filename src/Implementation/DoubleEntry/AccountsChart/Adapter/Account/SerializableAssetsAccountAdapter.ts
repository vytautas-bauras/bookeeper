import SerializableAccountAdapter from "./SerializableAccountAdapter";
import AssetsAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/AssetsAccount";
import SerializableAccount from "../../Serializable/SerializableAccount";

export default class SerializableAssetsAccountAdapter extends SerializableAccountAdapter<AssetsAccount> implements AssetsAccount {
    createChild(serializedAccount: SerializableAccount): SerializableAssetsAccountAdapter {
        return new SerializableAssetsAccountAdapter(serializedAccount, this);
    }
}
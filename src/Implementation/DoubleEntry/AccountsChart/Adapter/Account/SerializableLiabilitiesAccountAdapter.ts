import SerializableAccount from "../../Serializable/SerializableAccount";
import SerializableAccountAdapter from "./SerializableAccountAdapter";
import LiabilitiesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/LiabilitiesAccount";

export default class SerializableLiabilitiesAccountAdapter extends SerializableAccountAdapter<LiabilitiesAccount> implements LiabilitiesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableLiabilitiesAccountAdapter {
        return new SerializableLiabilitiesAccountAdapter(serializedAccount, this);
    }
}
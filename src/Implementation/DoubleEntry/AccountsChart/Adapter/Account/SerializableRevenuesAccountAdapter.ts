import SerializableAccountAdapter from "./SerializableAccountAdapter";
import RevenuesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/RevenuesAccount";
import SerializableAccount from "../../Serializable/SerializableAccount";

export default class SerializableRevenuesAccountAdapter extends SerializableAccountAdapter<RevenuesAccount> implements RevenuesAccount {
    createChild(serializedAccount: SerializableAccount): SerializableRevenuesAccountAdapter {
        return new SerializableRevenuesAccountAdapter(serializedAccount, this);
    }
}
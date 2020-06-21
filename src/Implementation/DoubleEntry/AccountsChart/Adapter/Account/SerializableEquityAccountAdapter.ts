import SerializableAccount from "../../Serializable/SerializableAccount";
import SerializableAccountAdapter from "./SerializableAccountAdapter";
import EquityAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/EquityAccount";

export default class SerializableEquityAccountAdapter extends SerializableAccountAdapter<EquityAccount> implements EquityAccount {
    createChild(serializedAccount: SerializableAccount): SerializableEquityAccountAdapter {
        return new SerializableEquityAccountAdapter(serializedAccount, this);
    }
}
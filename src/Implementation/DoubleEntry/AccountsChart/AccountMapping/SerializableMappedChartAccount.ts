import SerializableAccount from "../Serializable/SerializableAccount";

export default interface SerializableMappedChartAccount extends SerializableAccount {
    mappedAccountCodes: string[];
    childAccounts: SerializableMappedChartAccount[]
}
import SerializableAccount from "../Serializable/SerializableAccount";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class SerializableAccountAdapter implements ChartAccount {
    constructor(
        protected accountType: ChartAccountType,
        protected serializedAccount: SerializableAccount,
        protected parentAccount?: SerializableAccountAdapter
    ) {
    }

    getAccountCode() {
        return this.serializedAccount.accountCode;
    }

    getAccountTitle() {
        return this.serializedAccount.accountTitle;
    }

    getChildAccounts(): SerializableAccountAdapter[] {
        return this.serializedAccount
            .childAccounts
            .map(child => new SerializableAccountAdapter(
                this.getAccountType(), 
                child,
                this
            ));
    }

    getParentAccount(): SerializableAccountAdapter|undefined {
        return this.parentAccount;
    }

    getAccountType(): ChartAccountType {
        return this.accountType;
    }
}
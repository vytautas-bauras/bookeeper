import BaseInMemoryAccount from "./BaseInMemoryAccount";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryLiabilitiesAccount extends BaseInMemoryAccount {
    getAccountType() {
        return ChartAccountType.Liabilities;
    }
}
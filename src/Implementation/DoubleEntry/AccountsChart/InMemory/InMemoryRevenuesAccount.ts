import BaseInMemoryAccount from "./BaseInMemoryAccount";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryRevenuesAccount extends BaseInMemoryAccount {
    getAccountType() {
        return ChartAccountType.Revenues;
    }
}
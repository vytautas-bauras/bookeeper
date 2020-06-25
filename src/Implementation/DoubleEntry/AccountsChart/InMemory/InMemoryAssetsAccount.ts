import BaseInMemoryAccount from "./BaseInMemoryAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryAssetsAccount extends BaseInMemoryAccount {
    getAccountType() {
        return ChartAccountType.Assets;
    }
}
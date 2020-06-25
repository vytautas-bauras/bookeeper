import BaseInMemoryAccount from "./BaseInMemoryAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryEquityAccount extends BaseInMemoryAccount {
    getAccountType() {
        return ChartAccountType.Equity;
    }
}
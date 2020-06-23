import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import SerializableAccountAdapter from "./SerializableAccountAdapter";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import { SerializableAccountsChart } from "../Serializable/SerializableAccountsChart";

export default class SerializableAccountsChartAdapter implements AccountsChart {
    constructor(protected serializedAccountsChart: SerializableAccountsChart) {

    }

    getRootAccountByType(accountType: ChartAccountType) {
        return new SerializableAccountAdapter(
            accountType,
            this.serializedAccountsChart[accountType]
        );
    }
}
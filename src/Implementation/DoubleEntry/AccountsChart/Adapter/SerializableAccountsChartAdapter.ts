import SerializableAccountAdapter from "./SerializableAccountAdapter";
import { SerializableAccountsChart } from "../Serializable/SerializableAccountsChart";
import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

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
import ChartAccountMappings from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountMapping/ChartAccountMappings";
import { SerializableMappedAccountsChart } from "./SerializableMappedAccountsChart";
import SerializableMappedChartAccount from "./SerializableMappedChartAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import SerializableAccountsChartAdapter from "../Adapter/SerializableAccountsChartAdapter";

export default class MappedAccountsChartAdapter implements ChartAccountMappings {
    private mappedAccountMap: {
        [accountCode: string]: string
    } = {};

    private targetAccountsChart: SerializableAccountsChartAdapter;

    constructor(
        serializedTargetAccountsChart: SerializableMappedAccountsChart,
        private baseAccountsChart: AccountsChart
    ) {
        this.initMapRecursive(serializedTargetAccountsChart[ChartAccountType.Assets]);
        this.initMapRecursive(serializedTargetAccountsChart[ChartAccountType.Liabilities]);
        this.initMapRecursive(serializedTargetAccountsChart[ChartAccountType.Equity]);
        this.initMapRecursive(serializedTargetAccountsChart[ChartAccountType.Revenues]);
        this.initMapRecursive(serializedTargetAccountsChart[ChartAccountType.Expenses]);

        this.targetAccountsChart = new SerializableAccountsChartAdapter(serializedTargetAccountsChart);
    }

    private initMapRecursive(account: SerializableMappedChartAccount) {
        account.mappedAccountCodes.forEach(code => {
            this.mappedAccountMap[code] = account.accountCode;
        });
    }

    getCorrespondingTargetAccountCode(baseAccountCode: string) {
        return this.mappedAccountMap[baseAccountCode];
    }

    getTargetAccountsChart() {
        return this.targetAccountsChart;
    }

    getBaseAccountsChart() {
        return this.baseAccountsChart;
    }
}
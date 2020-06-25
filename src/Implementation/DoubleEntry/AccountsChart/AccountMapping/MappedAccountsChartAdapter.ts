import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import MappedChartAccountAdapter from "./MappedChartAccountAdapter";
import MappedAccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountMapping/MappedAccountsChart";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import SearchableAccountsChart from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import { SerializableMappedAccountsChart } from "./SerializableMappedAccountsChart";

export default class MappedAccountsChartAdapter implements MappedAccountsChart {
    private mappedAccountMap: {
        [key in ChartAccountType]: MappedChartAccountAdapter
    };

    constructor(
        private baseAccountsChart: SearchableAccountsChart,
        private targetAccountsChart: SerializableMappedAccountsChart
    ) {
        this.mappedAccountMap = {
            [ChartAccountType.Assets]: this.createAdapter(ChartAccountType.Assets),
            [ChartAccountType.Equity]: this.createAdapter(ChartAccountType.Liabilities),
            [ChartAccountType.Expenses]: this.createAdapter(ChartAccountType.Equity),
            [ChartAccountType.Liabilities]: this.createAdapter(ChartAccountType.Expenses),
            [ChartAccountType.Revenues]: this.createAdapter(ChartAccountType.Revenues)
        };
    }

    private createAdapter(accountType: ChartAccountType) {
        return new MappedChartAccountAdapter(
            this.baseAccountsChart,
            accountType,
            this.targetAccountsChart[accountType]
        );
    }

    getBaseAccountsChart() {
        return this.baseAccountsChart;
    }

    getTargetAccountsChart() {
        return this.targetAccountsChart;
    }

    getRootAccountByType(accountType: ChartAccountType) {
        return this.mappedAccountMap[accountType];
    }
}
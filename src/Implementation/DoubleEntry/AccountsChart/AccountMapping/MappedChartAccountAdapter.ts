import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import MappedAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountMapping/MappedAccount";
import SerializableMappedChartAccount from "./SerializableMappedChartAccount";
import SerializableAccountAdapter from "../Adapter/SerializableAccountAdapter";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import SearchableAccountsChart from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";

export default class MappedChartAccountAdapter extends SerializableAccountAdapter implements MappedAccount  {
    constructor(
        protected baseChart: SearchableAccountsChart,
        accountType: ChartAccountType,
        protected serializedAccount: SerializableMappedChartAccount,
        parentAccount?: SerializableAccountAdapter
    ) {
        super(accountType, serializedAccount, parentAccount);
    }

    getCorrespondingChartAccounts() {
        return this.serializedAccount.mappedAccountCodes.map(
            code => this.baseChart.getAccountByCode(code)
        );
    }
}
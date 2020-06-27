import AccountsBalanceMapper from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/Mapping/AccountsBalanceMapper";
import AccountsBalance from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";
import { TemporaryAccountBalanceMap } from "../TemporaryAccountsBalanceMapInitializer";
import AccountBalance from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import ChartAccountMappings from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountMapping/ChartAccountMappings";
import { ChartAccountType } from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class TemporaryAccountsBalanceMapper {
    constructor(
        private temporaryBalanceMap: TemporaryAccountBalanceMap
    ) {
    }

    mapBalance(baseBalance: AccountsBalance, mappings: ChartAccountMappings) {
        this.mapRootAccount(baseBalance, ChartAccountType.Assets, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Liabilities, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Equity, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Revenues, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Expenses, mappings);
    }

    private mapRootAccount(
        baseBalance: AccountsBalance, 
        accountType: ChartAccountType, 
        mappings: ChartAccountMappings
    ) {
        this.mapAccountBalanceRecursive(
            baseBalance.getRootBalanceByAccountType(accountType),
            mappings
        );
    }

    private mapAccountBalanceRecursive(
        accountBalance: AccountBalance, 
        mappings: ChartAccountMappings
    ) {
        const targetBalance = this.temporaryBalanceMap[mappings.getCorrespondingTargetAccountCode(accountBalance.getChartAccount().getAccountCode())];
        targetBalance.balance += accountBalance.getBalance();
        targetBalance.credit += accountBalance.getCredit();
        targetBalance.debit += accountBalance.getDebit();

        accountBalance.getChildAccountBalances().forEach(child => this.mapAccountBalanceRecursive(child, mappings));
    }
}
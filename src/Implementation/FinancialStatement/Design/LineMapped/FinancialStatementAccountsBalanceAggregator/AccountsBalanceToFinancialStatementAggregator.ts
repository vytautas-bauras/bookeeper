import AccountsBalanceAggregator from "../../../../../Contract/SystemComponents/DoubleEntry/AccountsBalance/Aggregator/AccountsBalanceAggregator";
import InMemoryFinancialStatement from "../../../InMemory/InMemoryFinancialStatement";
import InMemoryFinancialStatementLine from "../../../InMemory/InMemoryFinancialStatementLine";
import LineMappedFinancialStatementDesign from "../../../../../Contract/CoreConcepts/FinancialStatement/Design/LineMapped/LineMappedFinancialStatementDesign";
import MappedFinancialStatementLine from "../../../../../Contract/CoreConcepts/FinancialStatement/Design/LineMapped/MappedFinancialStatementLineDesign";

export default class AccountsBalanceToFinancialStatementAggregator {
    constructor(
        private balanceAggregator: AccountsBalanceAggregator,
        private design: LineMappedFinancialStatementDesign
    ) {

    }

    getFinancialStatement() {
        return new InMemoryFinancialStatement(
            this.design.getPlannedFinancialStatementTitle(),
            this.design.getPlannedFinancialStatementLines().map(line => 
                this.createFinancialStatementLineRecursive(line)
            )
        );
    }

    protected createFinancialStatementLineRecursive(
        lineDesign: MappedFinancialStatementLine
    ): InMemoryFinancialStatementLine {
        return new InMemoryFinancialStatementLine(
            lineDesign.getPlannedFinancialStatementLineCode(),
            lineDesign.getPlannedFinancialStatementLineTitle(),
            this.balanceAggregator.getAccountBalanceSum(
                lineDesign.getChartAccountsMappedToStatementLine()
            ),
            lineDesign.getPlannedChildFinancialStatementLines().map(
                childDesign => this.createFinancialStatementLineRecursive(
                    childDesign
                )
            )
        );
    }
}
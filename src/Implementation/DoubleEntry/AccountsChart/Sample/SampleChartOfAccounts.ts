import InMemoryAccountsChart from "../InMemory/InMemoryAccountsChart";
import InMemoryAssetsAccount from "../InMemory/InMemoryAssetsAccount";
import InMemoryLiabilitiesAccount from "../InMemory/InMemoryLiabilitiesAccount";
import InMemoryEquityAccount from "../InMemory/InMemoryEquityAccount";
import InMemoryRevenuesAccount from "../InMemory/InMemoryRevenuesAccount";
import InMemoryExpensesAccount from "../InMemory/InMemoryExpensesAccount";

export default function() {
    return new InMemoryAccountsChart(
        new InMemoryAssetsAccount(
            "100",
            "Assets",
            [
                new InMemoryAssetsAccount("101","Cash"), 
                new InMemoryAssetsAccount("120","Accounts Receivable")
            ]
        ),
        new InMemoryLiabilitiesAccount(
            "200",
            "Liabilities"
        ),
        new InMemoryEquityAccount(
            "300",
            "Equity"
        ),
        new InMemoryRevenuesAccount(
            "400",
            "Revenues"
        ),
        new InMemoryExpensesAccount(
            "500",
            "Expenses"
        )
    );
}
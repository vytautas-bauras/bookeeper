import InMemoryLedgerTransaction from "../InMemory/InMemoryLedgerTransaction";
import InMemoryLedgerEntry from "../InMemory/InMemoryLedgerEntry";
import SampleChartOfAccounts from "../../AccountsChart/Sample/SampleChartOfAccounts";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const accountsChart = SampleChartOfAccounts;

const assetsAccount = accountsChart.getRootAccountByType(ChartAccountType.Assets);
const equityAccount = accountsChart.getRootAccountByType(ChartAccountType.Equity);

export default function() {
    return [
        new InMemoryLedgerTransaction(
            new Date(),
            'Bought a PC for cash',
            [
                new InMemoryLedgerEntry(assetsAccount, 1000),
                new InMemoryLedgerEntry(assetsAccount, -1000),
            ]
        ),
        new InMemoryLedgerTransaction(
            new Date(),
            'Issued Shares',
            [
                new InMemoryLedgerEntry(assetsAccount, 500),
                new InMemoryLedgerEntry(equityAccount, -500)
            ]
        )
    ];
}
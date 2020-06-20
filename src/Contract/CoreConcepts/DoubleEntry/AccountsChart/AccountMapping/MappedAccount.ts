interface MappedAccount {
    /**
     * An account from a different AccountsChart than the one that was used for the Ledger
     */
    getMappedChartAccount(): ChartAccount;

    /**
     * The accounts of the Ledger AccountsChart whose entries are to be treated as assigned to the mapped account
     */
    getCorrespondingChartAccounts(): ChartAccount[]; 
}
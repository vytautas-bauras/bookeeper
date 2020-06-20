interface MappedAccount {
    /**
     * The accounts of a different Ledger AccountsChart whose entries are to be 
     * treated as assigned to the mapped account
     */
    getCorrespondingChartAccounts(): ChartAccount[]; 
}

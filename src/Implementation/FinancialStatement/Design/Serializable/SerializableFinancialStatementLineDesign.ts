export default interface SerializableFinancialStatementLineDesign {
    code: string;
    title: string;
    childLines: SerializableFinancialStatementLineDesign[]
}
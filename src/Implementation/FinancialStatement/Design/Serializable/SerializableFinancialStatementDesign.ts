import SerializableFinancialStatementLineDesign from "./SerializableFinancialStatementLineDesign";

export default interface SerializableFinancialStatementDesign {
    title: string;
    lines: SerializableFinancialStatementLineDesign[];
}
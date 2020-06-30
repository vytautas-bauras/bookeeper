import SerializableFinancialStatementLineDesign from "../../Serializable/SerializableFinancialStatementLineDesign";

export default interface SerializableMappedFinancialStatementLineDesign extends SerializableFinancialStatementLineDesign {
    childLines: SerializableMappedFinancialStatementLineDesign[];
    mappedChartAccountCodes: string[];
}
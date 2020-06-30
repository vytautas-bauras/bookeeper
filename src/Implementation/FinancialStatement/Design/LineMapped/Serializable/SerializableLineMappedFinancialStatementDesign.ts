import SerializableFinancialStatementDesign from "../../Serializable/SerializableFinancialStatementDesign";
import SerializableMappedFinancialStatementLineDesign from "./SerializableMappedFinancialStatementLineDesign";

export default interface SerializableLineMappedFinancialStatementDesign extends SerializableFinancialStatementDesign {
    lines: SerializableMappedFinancialStatementLineDesign[];
}
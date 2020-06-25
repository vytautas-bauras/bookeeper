import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import SerializableMappedChartAccount from "./SerializableMappedChartAccount";

export type SerializableMappedAccountsChart = {[key in ChartAccountType]: SerializableMappedChartAccount};
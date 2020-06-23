import SerializableAccount from "./SerializableAccount";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export type SerializableAccountsChart = {[key in ChartAccountType]: SerializableAccount};
import BaseInMemoryAccount from "./BaseInMemoryAccount";
import LiabilitiesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/LiabilitiesAccount";

export default class InMemoryLiabilitiesAccount extends BaseInMemoryAccount<LiabilitiesAccount> implements LiabilitiesAccount {

}
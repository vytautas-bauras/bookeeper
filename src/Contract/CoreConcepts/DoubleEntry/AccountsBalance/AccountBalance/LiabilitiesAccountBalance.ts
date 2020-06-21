interface LiabilitiesAccountBalance extends BaseAccountBalance {
    getChartAccount(): LiabilitiesAccount;
    getChildAccountBalance(): LiabilitiesAccountBalance[];
}
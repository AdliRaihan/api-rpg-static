class UpgradeModel {
    request = {
        itemId: -1,
        currentUpgraded: -1
    }
    response = {
        itemUpgradeSuccess: false,
        itemUpgradedTimeStamp: 0,
        itemDetails: {},
        itemUpgraded: {}
    }
}
module.exports = UpgradeModel;
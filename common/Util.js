class AppUtil {
    static open() {
        console.log("test")
    }
    static RNGItemUpgrade(currentUpgraded) {
        const rngLeft = Math.random()
        var rngRight = 1
        var mines = rngRight / currentUpgraded
        rngRight -= mines
        return rngLeft > rngRight
    }
}
module.exports = AppUtil;
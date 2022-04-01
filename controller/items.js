const AppBase = require('../common/Base')
const itemsModel = require('./model/itemsModel')
const hardData = require('../common/hardData/HardItems')
class ItemsController extends AppBase {
    #baseModel;
    #filteredArr;
    #filterModel = {
        type: "", class: "", name: "", level: ""
    }
    constructor(req, res) {
        super(req, res)
        this.#baseModel = new itemsModel()
        switch (req.method) {
            case 'GET':
                this.#filterModel = req.query
                this.#filteredArr = Object.keys(this.#filterModel).filter(key => this.#filterModel[key] !== "")
                if (this.#filteredArr.length === 0)
                    this.#showingAllAvailableItems()
                else
                    this.#showingFilteredSection()
                break
            default:
                super.makeResponse("failed", 500, "METHOD NOT ALLOWED!")
                break
        }
    }
    #showingFilteredSection() {
        this.#baseModel.items = hardData.items
        this.#filteredArr.forEach(key => {
            // switching key, thereare 4 types of filtering
            // 1. type 2. class 3. name 4. level
            // all of these if keys are not found in hardData.items
            // will be ignored!
            switch (key) {
                // checking type from filtering object
                // all filtering object are input from frontends
                // if the key is not found when filtering then it'll be ignored
                case "type":
                    this.#baseModel.items = this.#baseModel.items.filter(
                        item => item.itemType === this.#filterModel.type
                    )
                    break

                // Filtering class field, 
                case "class":
                    this.#baseModel.items = this.#baseModel.items.filter(
                        item => Number(item.classType) === Number(this.#filterModel.class)
                    )
                    break
                // Filtering name 
                // here the name will using includes because
                // we want to search the name with the given name
                // so if the name is not found then it'll be ignored
                case "name":
                    this.#baseModel.items = this.#baseModel.items.filter(
                        item => item.itemName
                            .toLocaleLowerCase()
                            .includes(this.#filterModel.name
                                .toLocaleLowerCase()
                            )
                    )
                    break
                // Filtering level
                // just filtering level from filtering object
                // if the key is not found when filtering then it'll be ignored
                case "level":
                    this.#baseModel.items = this.#baseModel.items.filter(
                        item => Number(item.levelRequirement) === Number(this.#filterModel.level)
                    )
                    break
                // because the filtering key is string 
                // there are no precise switch case for it
                // still needed default on this case
                default:
                    break
            }
        })
        // if the filtered array is empty then it'll be showing all available items
        // either way the items are not found will be shown into the payload
        // but the item payload will be empty
        super.makeResponse("success", 200, "", this.#baseModel)
    }
    #showingAllAvailableItems() {
        // hard data is given all items 
        // so here backends needs to seperate them into 2 sections
        const weapons = hardData.items.filter(item => item.itemType === hardData.itemType.weapon)
        // here available items are seperated to two different payload
        // armors is for armors that has no class requirement (for now)
        // and also they have different item type
        const armors = hardData.items.filter(
            item =>
                item.itemType === hardData.itemType.armorTop
                || item.itemType === hardData.itemType.armorBottom
                || item.itemType === hardData.itemType.armorShoes
                || item.itemType === hardData.itemType.armorHat
        )
        // assigning the items to the baseModel
        this.#baseModel.armors = armors
        // weapons is for weapons that has class requirement
        this.#baseModel.weapons = weapons
        // will be showing all available items
        // either way either the armor or weapons payload will be empty
        // will be shown into the payload
        // but they're empty or the payload are not found
        // actually i havent thought about this lol
        super.makeResponse("success", 200, "", this.#baseModel)
    }
}
module.exports = ItemsController;
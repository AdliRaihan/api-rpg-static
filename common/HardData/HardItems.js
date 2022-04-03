class HardItems {
    static jobClassType = {
        "allClass": 99,
        "warrior": 0,
        "knight": 1,
        "wizard": 2,
        "archer": 3
    }
    static itemType = {
        "weapon": 0,
        "armorHat": 1,
        "armorTop": 2,
        "armorBottom": 3,
        "armorShoes": 4
    }
    static items = [
        {
            itemId: 0,
            itemType: this.itemType.weapon,
            classType: this.jobClassType.warrior,
            itemName: "1H Wooden Sword",
            levelRequirement: 1,
        },
        {
            itemId: 1,
            itemType: this.itemType.weapon,
            classType: this.jobClassType.knight,
            itemName: "Wooden Sword",
            levelRequirement: 1,
        },
        {
            itemId: 2,
            itemType: this.itemType.weapon,
            classType: this.jobClassType.archer,
            itemName: "Wooden Bow",
            levelRequirement: 1,
        },
        {
            itemId: 3,
            itemType: this.itemType.weapon,
            classType: this.jobClassType.wizard,
            itemName: "Wooden Staff",
            levelRequirement: 1,
        },
        {
            itemId: 4,
            itemType: this.itemType.weapon,
            classType: this.jobClassType.wizard,
            itemName: "Wooden Staff",
            levelRequirement: 1,
        },
        {
            itemId: 5,
            itemType: this.itemType.HardItems,
            classType: this.jobClassType.allClass,
            itemName: "Wooden Armor(H)",
            levelRequirement: 1,
        },
        {
            itemId: 6,
            itemType: this.itemType.armorTop,
            classType: this.jobClassType.allClass,
            itemName: "Wooden Armor(T)",
            levelRequirement: 1,
        },
        {
            itemId: 7,
            itemType: this.itemType.armorBottom,
            classType: this.jobClassType.allClass,
            itemName: "Wooden Armor(B)",
            levelRequirement: 1,
        },
        {
            itemId: 8,
            itemType: this.itemType.armorShoes,
            classType: this.jobClassType.allClass,
            itemName: "Wooden Armor(S)",
            levelRequirement: 1,
        },
        {
            itemId: 9,
            itemType: this.itemType.armorShoes,
            classType: this.jobClassType.allClass,
            itemName: "Platinum Armor(S)",
            levelRequirement: 50,
        }
    ]
}
module.exports = HardItems
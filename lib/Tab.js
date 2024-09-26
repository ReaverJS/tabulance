export default class Tab {
    el = {}

    constructor (firefoxTab) {
        for (let key in firefoxTab) {
            this[key] = firefoxTab[key]
        }
    }
}
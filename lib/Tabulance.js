import Tab from "./Tab.js";

export default class Tabulance {
    tabs = []

    constructor () {
        this.initTabs()
    }
    initTabs = async () => {
        browser.tabs.query({}).then(browserTabs => {
            browserTabs.forEach(browserTab => {
                this.tabs.push(new Tab(browserTab))
            })
        })
    }
}
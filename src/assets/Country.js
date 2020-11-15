import countries from '../data/countries.json'

class Country {

    name
    id
    continent
    abbr1
    abbr2

    constructor(country_id) {
        let country = countries.find(element => element.id === country_id)
        Object.assign(this, country)
    }

    getFlagId() {
        return this.abbr2
    }
}

export default Country
import regions from '../data/regions.json'
import Country from './Country'

class Region {

    name
    id
    country

    constructor(reg_id) {
        let region = regions.find(element => element.id === reg_id)
        Object.assign(this, region)
        this.country = new Country(region.country)
    }

    getFlagId() {
        return this.country.getFlagId()
    }
}

export default Region
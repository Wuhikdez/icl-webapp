import races from '../data/races.json'
import Country from './Country'

class Race {
    id
    seasons

    constructor(race_id) {
        let race = races.find(element => element.id === race_id)
        Object.assign(this, race)
        this.seasons.forEach(season => {
            if(typeof season.country === 'string')
                season.country = new Country(season.country)
        })
    }

    getSeason(year) {
        return this.seasons.find(element => element.year == year)
    }

    getFlagId(year) {
        return this.getSeason(year).country.getFlagId()
    }
}

export default Race
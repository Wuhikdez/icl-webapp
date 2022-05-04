import cyclists from '../data/cyclists.json'
import Region from './Region'
import results from './Results'
import Race from './Race'

class Cyclist {

    firstname
    lastname
    aod
    birthdate
    id
    potential
    region
    seasons

    constructor(cyc_id) {
        let cyclist = cyclists.find(element => element.id === cyc_id)
        Object.assign(this, cyclist)
        if (cyclist)
            this.region = new Region(cyclist.region)
    }

    getFlagId() {
        if (this.region)
            return this.region.getFlagId()
        else return null
    }

    fullname() {
        return this.lastname.toUpperCase() + ' ' + this.firstname
    }

    getTeam(year) {
        let season = this.seasons.find(season => season.year == year)
        return season ? season.team : undefined
    }

    getContractYears() {
        return this.seasons.filter(season => season.team != 'team_119').map(season => season.year).sort()
    }

    getResults(year) {
        let cyclist_results = []
        results(year).forEach(x => {
            x.results.forEach(y => {
                let tables = y.tables.tables
                let main = tables.find(table => table.tag === 'main')
                if (main && x.id && main.rows.find(row => row.cyc_id === this.id)) {
                    //let race = new Race(x.id).getSeason(year)
                    tables.forEach(table => {
                        let cyc_row = table.rows.find(row => row.cyc_id === this.id)
                        if (cyc_row)
                            cyclist_results.push({
                                race: x.id,
                                position: cyc_row.pos,
                                classification: table.tag,
                                tag: y.tag
                            })
                    })
                }
            })
        })
        return cyclist_results
    }
}

export default Cyclist

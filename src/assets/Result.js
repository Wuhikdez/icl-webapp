import seasons from './Seasons'
import Race from './Race'
import Cyclist from './Cyclist'
import Team from './Team'

class Result {

    id
    results
    year
    race_data

    constructor(race_id, year) {
        let result = seasons()[year].find(element => element.id === race_id)
        Object.assign(this, result)
        if(result)
            this.race_data = new Race(race_id).seasons.find(element => element.year == year)
    }

    getFlagId() {
        return this.race_data.country.getFlagId()
    }

    getWinner() {
        if(this.results) {
            let final = new ResultTable(this.results, 'final')
            let table = final.getWinner()
            if (table && table.cyc_id)
                return new Cyclist(table.cyc_id)
            else {
                if(table && table.team_id)
                    return new Team(table.team_id)
                else return null
            }
        }
        else return null
    }
}

class ResultTable {

    tables

    constructor(results, tag) {
        let result = results.find(element => element.tag === tag)
        if(result)
            Object.assign(this, result.tables)
    }

    getTable(tag='main') {
        if(this.tables)
            return this.tables.find(element => element.tag === tag).rows
        else return null
    }

    getWinner() {
        let table = this.getTable()
        if (table)
        // eslint-disable-next-line
            return table.find(element => element.pos == '1')
        else return null
    }
}

export default Result
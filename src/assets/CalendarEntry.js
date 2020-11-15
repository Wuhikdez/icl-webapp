import Result from './Result'

class CalendarEntry {

    race
    race_data
    result
    year
    winner

    constructor(race, year) {
        this.race = race
        this.year = year
        this.race_data = race.getSeason(year)
        if (this.race_data)
            this.result = new Result(race.id, year)
        if (this.result)
            this.winner = this.result.getWinner()
    }

    getFlagId() {
        return this.race.getFlagId(this.year)
    }
}

export default CalendarEntry
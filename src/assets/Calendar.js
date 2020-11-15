import races from '../data/races.json'
import Race from './Race'
import CalendarEntry from './CalendarEntry'

class Calendar {

    data

    constructor(year) {
        let calendar = []
        races.forEach(race => {
            calendar.push(new CalendarEntry(new Race(race.id), year))
        })
        this.data = calendar
    }
}



export default Calendar
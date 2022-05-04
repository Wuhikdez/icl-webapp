import cyclists from '../data/cyclists.json'
import Cyclist from './Cyclist'
import '../styling.css'

class CyclistList {

    cyclistList

    constructor(year) {
        if(year == 'All') {
            this.cyclistList = cyclists.map(cyclist => ({cyclist: new Cyclist(cyclist.id), season: cyclist.seasons.filter(season => season.team != 'team_119').sort((a, b) => b.year - a.year)[0]})).filter(cyclist => cyclist.season)
        } else {
            this.cyclistList = cyclists.map(cyclist => ({cyclist: new Cyclist(cyclist.id), season: cyclist.seasons.find(season => season.year == year && season.team != 'team_119')})).filter(cyclist => cyclist.season)
        }
    }
}

export default CyclistList
import teams from '../data/teams.json'
import cyclists from '../data/cyclists.json'
import Cyclist from './Cyclist'
import '../styling.css'

class Team {

    id
    seasons

    constructor(team_id) {
        let team = teams.find(element => element.id === team_id)
        Object.assign(this, team)
        /*if(cyclist)
            this.region = new Region(cyclist.region)*/
    }

    getTeam(year) {
        return this.seasons.find(season => season.year == year)
    }

    getCyclists(year) {
        let cyclists_team = cyclists.filter(cyclist => {
            let season = cyclist.seasons.find(season => season.year == year)
            return (season && season.team === this.id)
        })
        cyclists_team = cyclists_team.sort((a,b) => a.lastname + a.firstname > b.lastname + b.firstname)
        return cyclists_team.map(cyclist => new Cyclist(cyclist.id))
    }

    /*getFlagId(year) {
        if(this.region)
            return this.region.getFlagId()
        else return null
    }*/
    getFlagId() {
        return null
    }
}

export default Team
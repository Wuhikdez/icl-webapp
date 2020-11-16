import React, { Component } from 'react'
import Cyclist from '../assets/Cyclist'
import Flag from '../icons/Flag'
import Team from '../assets/Team'
import CyclistResult from './CyclistResult'
import CalendarEntry from '../assets/CalendarEntry'
import Race from '../assets/Race'

export default class CyclistComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { cyc_id, year } = this.props.match.params
        this.setState({ year: year, cyc_id: 'cyc_' + cyc_id })
        this.getCyclist(cyc_id, year)
    }

    getCyclist(cyc_id, year) {
        let cyclist = new Cyclist(cyc_id)
        let team = new Team(cyclist.getTeam(year))
        this.setState({ cyclist: cyclist, team: team.getTeam(year) })
        let results = cyclist.getResults(year)
        let races = []
        results.forEach(result => {
            if (!races.includes(result.race))
                races.push(result.race)
        })
        let cyclist_results = races.map(race => {
            return {
                id: race,
                race: new CalendarEntry(new Race(race), year),
                results: results.filter(result => result.race === race)
            }
        })
        cyclist_results = cyclist_results.sort((a, b) => a.race.race_data.start_date - b.race.race_data.start_date)
        this.setState({ results: cyclist_results })
    }

    render() {
        console.log('test')
        return (
            <div style={{ marginLeft: 180 }}>
                {this.state.cyclist && <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: 14, marginRight: 8 }}>
                        <Flag tag={this.state.cyclist.getFlagId()} size={40} />
                    </div>
                    <h2>{this.state.cyclist.fullname()}</h2>
                    <h2 style={{ marginLeft: 16, color: 'steelblue' }}>{this.state.team.name}</h2>
                </div>}
                {this.state.results && <div>
                    {this.state.results.map(result => <CyclistResult 
                        key={result.id} race={result.race} results={result.results} year={this.state.year}/>)}
                </div>}
            </div>
        )
    }
}

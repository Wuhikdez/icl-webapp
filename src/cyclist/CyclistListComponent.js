import React, { Component } from 'react'
import '../styling.css'
import CyclistList from '../assets/CyclistList'
import cyclists from '../data/cyclists.json'
import Flag from '../icons/Flag'
import Team from '../assets/Team'

export default class TeamListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cyclists: [],
            availableYears: ['All', ...cyclists.flatMap(cyclist => cyclist.seasons.map(season => season.year)).filter((v, i, s) => s.indexOf(v) === i).sort()]
        }
    }


    componentDidMount() {
        const { year } = this.props.match.params
        let cyclistList = new CyclistList(year).cyclistList.sort((a, b) => a.cyclist.fullname().localeCompare(b.cyclist.fullname()))
        console.log(cyclistList)
        this.setState({ cyclists: cyclistList, year: year })
    }

    componentDidUpdate() {
        const { year } = this.props.match.params
        if (this.state.year != year) {
            const { year } = this.props.match.params
            let cyclistList = new CyclistList(year).cyclistList.sort((a, b) => a.cyclist.fullname().localeCompare(b.cyclist.fullname()))
            this.setState({ cyclists: cyclistList, year: year })
        }
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                <div style={{ display: 'flex' }}>
                    <h2>Cyclists</h2>
                    {this.state.availableYears.map(year =>
                        this.state.year == year
                        ? <h2 style={{ marginLeft: 16, color: 'steelblue' }}>{this.state.year}</h2>
                        : <h2 className="select-year" style={{ marginLeft: 16 }} onClick={() => this.props.history.push('/cyclists/' + year)}>{year}</h2>)}
                </div>
                {this.state.year == "All" && <div style={{ display: 'flex'}} key="header">
                    <div className="table-item" style={{ width: 338 }}><i style={{ marginLeft: 22 }}>Rider Name</i></div>
                    <div className="table-item" style={{ width: 320 }}><i style={{ marginLeft: 4 }}>Team</i></div>
                    <div className="table-item" style={{ width: 100 }}><i style={{ marginLeft: 4 }}>Last Contract</i></div>
                </div>}
                {this.state.cyclists && this.state.cyclists.map(cyclistEntry => <div style={{ display: 'flex' }} key={cyclistEntry.cyclist.id}>
                    <div className="table-item-link" style={{ display: 'flex' }}
                        onClick={() => this.props.history.push('/cyclist/' + cyclistEntry.cyclist.id + '/' + cyclistEntry.season.year)}>
                        <div style={{ marginTop: 0 }}>
                            <Flag tag={cyclistEntry.cyclist.getFlagId()} size={18} />
                        </div>
                        <div style={{ marginLeft: 4, width: 320 }}>{cyclistEntry.cyclist.fullname()}</div>
                    </div>
                    <div className="table-item-link" style={{ width: 320 }}
                        onClick={() => this.props.history.push('/team/' + cyclistEntry.season.team + '/' + cyclistEntry.season.year)}>
                            {cyclistEntry.season.team ? new Team(cyclistEntry.season.team).getTeam(cyclistEntry.season.year)?.name : 'unknown'}
                    </div>
                    {this.state.year == "All" && <div className="table-item" style={{ width: 100}}>{cyclistEntry.season.year}</div>}
                </div>)}
            </div>
        )
    }
}

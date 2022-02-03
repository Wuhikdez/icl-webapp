import React, { Component } from 'react'
import '../styling.css'
import TeamList from '../assets/TeamList'
import teams from '../data/teams.json'

export default class TeamListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            availableYears: ['All', ...teams.flatMap(team => team.seasons.map(season => season.year)).filter((v, i, s) => s.indexOf(v) === i).sort()]
        }
    }


    componentDidMount() {
        const { year } = this.props.match.params
        let teamList = new TeamList(year).teamList.sort((a, b) => a.season.name.localeCompare(b.season.name))
        this.setState({ teams: teamList, year: year })
    }

    componentDidUpdate() {
        const { year } = this.props.match.params
        if (this.state.year != year) {
            const { year } = this.props.match.params
            let teamList = new TeamList(year).teamList.sort((a, b) => a.season.name.localeCompare(b.season.name))
            this.setState({ teams: teamList, year: year })
        }
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                <div style={{ display: 'flex' }}>
                    <h2>Teams</h2>
                    {this.state.availableYears.map(year =>
                        this.state.year == year
                        ? <h2 style={{ marginLeft: 16, color: 'steelblue' }}>{this.state.year}</h2>
                        : <h2 className="select-year" style={{ marginLeft: 16 }} onClick={() => this.props.history.push('/teams/' + year)}>{year}</h2>)}
                </div>
                {this.state.year == "All" && <div style={{ display: 'flex'}} key="header">
                    <div className="table-item" style={{ width: 320 }}><i>Team Name</i></div>
                    <div className="table-item" style={{ width: 72 }}><i>Division</i></div>
                    <div className="table-item" style={{ width: 72 }}><i>Last Raced</i></div>
                </div>}
                {this.state.teams && this.state.teams.map(item => <div style={{ display: 'flex' }} key={item.id}>
                    <div className="table-item-link" style={{ width: 320 }} 
                        onClick={() => this.props.history.push('/team/' + item.id + '/' + item.season.year)}
                    >{item.season.name && <div>
                        {item.season.name}
                    </div>}</div>
                    <div className="table-item" style={{ width: 72 }}>{item.season.div}</div>
                    {this.state.year == "All" && <div className="table-item" style={{ width: 72 }}>{item.season.year}</div>}
                </div>)}
            </div>
        )
    }
}

import React, { Component } from 'react'
import Calendar from './assets/Calendar'
import './styling.css'
import Flag from './icons/Flag'

export default class CalendarComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            calendar: null
        }
    }


    componentDidMount() {
        const { year } = this.props.match.params
        let calendar = new Calendar(year)
        console.log(calendar)
        this.setState({ calendar: calendar, year: year })
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                <div style={{ display: 'flex' }}>
                    <h2>Calendar</h2>
                    <h2 style={{ marginLeft: 16, color: 'steelblue' }}>{this.state.year}</h2>
                </div>
                {this.state.calendar && this.state.calendar.data.map(item => <div style={{ display: 'flex' }} key={item.id}>
                    <div className="table-item" style={{ width: 32 }}>{item.race_data.start_date}</div>
                    <div className="table-item-link" style={{ width: 280, display: 'flex' }} onClick={() => this.props.history.push('/race/' + item.race.id + '/' + this.state.year)}>
                        <Flag tag={item.getFlagId()} size={18} />
                        <div style={{ marginLeft: 4 }}>{item.race_data.name}</div>
                    </div>
                    {item.winner && item.winner.firstname && <div className="table-item-link" style={{ width: 240, display: 'flex' }}
                        onClick={() => this.props.history.push('/cyclist/' + item.winner.id + '/' + this.state.year)}
                    >
                        <Flag tag={item.winner.getFlagId()} size={18} />
                        <div style={{ marginLeft: 4 }}>{item.winner.fullname()}</div>
                        {}
                    </div>}
                    {item.winner && !item.winner.firstname && <div className="table-item-link" style={{ width: 240, display: 'flex' }}>
                        <div style={{ marginLeft: 22 }}>{item.winner.getTeam(this.state.year).name}</div>
                    </div>}
                    {!item.winner && <div className="table-item-link" style={{ width: 240, display: 'flex' }} />}
                    <div className="table-item" style={{ width: 32 }}>{item.race_data.div}</div>
                </div>)}
            </div>
        )
    }
}

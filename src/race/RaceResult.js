import React, { Component } from 'react'
import Races from '../data/races.json'
import Res2018 from '../data/results_2018.json'
import ResultRow from './ResultRow'
import Flag from '../icons/Flag'
import Result from '../assets/Result'

const Results = {
    '2018': Res2018
}

export default class RaceResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        const { race_id, year, tag } = this.props.match.params
        this.setState({ year: year, race_id: 'race_' + race_id })
        this.getResult('race_' + race_id, year, tag ? tag : 'final')
    }

    getResult = (race_id, year, tag) => {
        let result = new Result(race_id, year)
        this.setState({ results: result.results, race_data: result.race_data, selector: tag },() => this.setTable(tag, 'main'))
    }

    setTable = (tag, classification) => {
        let results = this.state.results
        let table = results.find(element => element.tag === tag).tables.tables.find(element => element.tag === classification)
        this.setState({table: table})
    } 

    onChangeSelector = (e) => {
        this.setTable(e.target.value, 'main')
        this.props.history.push('/race/' + this.state.race_id.slice(this.state.race_id.indexOf('_') + 1) + '/' + this.state.year + '/' + e.target.value)
        this.setState({selector: e.target.value})
    }

    render() {
        return (
            <div style={{ marginLeft: 180 }}>
                {this.state.race_data && <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: 14, marginRight: 8 }}>
                        <Flag tag={this.state.race_data.country.getFlagId()} size={40} />
                    </div>
                    <h2>{this.state.race_data.name}</h2>
                    <h2 style={{marginLeft: 16, color:'steelblue'}}>{this.state.race_data.div}</h2>
                </div>}
                {this.state.results && this.state.results.length > 1 && <select value={this.state.selector} onChange={(e) => this.onChangeSelector(e)}>
                    {this.state.results.map(element => <option value={element.tag} key={element.tag}>
                        {element.tag === 'final' ? 'General' : 'Stage ' + element.tag.slice(element.tag.indexOf('_') + 1)}
                    </option>)}
                </select>}
                {this.state.table && this.state.table.rows.map(row => <ResultRow key={row.pos} row={row} year={this.state.year} history={this.props.history} />)}
            </div>
        )
    }
}

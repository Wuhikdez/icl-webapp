import React, { Component } from 'react'
import Flag from '../icons/Flag'
import '../styling.css'
import CyclistStageRow from './CyclistStageRow'

export default class CyclistResult extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        let classic = this.props.results.length === 1 && this.props.results[0].tag === 'final' ? this.props.results[0].position : ''
        let stageResults = []
        if (!classic) {
            let tags = []
            this.props.results.forEach(result => {
                if (result.tag === "final")
                    return
                if (!tags.includes(parseInt(result.tag.slice(result.tag.indexOf('_') + 1))))
                    tags.push(parseInt(result.tag.slice(result.tag.indexOf('_') + 1)))
            })
            tags = tags.sort((a, b) => a - b)
            stageResults = tags.map(tag => {
                return {
                    name: "Stage " + tag,
                    results: this.props.results.filter(result => result.tag === "stage_" + tag)
                }
            })
            this.props.results.forEach(result => {
                if (result.tag !== "final")
                    return
                stageResults.push({
                    name: result.classification === "main" ? "General Classification" : result.classification,
                    results: [{
                        classification: 'main',
                        position: result.position
                    }]
                })
            })
        }
        this.setState({ race: this.props.race, results: this.props.results, year: this.props.year, classic: classic, stageResults: stageResults })
    }

    render() {
        return (
            <div>
                {this.state.race && <div style={{ borderBottom: '1px solid #000000', width: 460 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: 40, paddingLeft: 10 }} className='table-item'>{this.state.classic}</div>
                        <div className='table-item-link' style={{ display: 'flex', width: 420 }}
                        onClick={() => this.props.history.push('/race/' + this.state.race.race.id + '/' + this.state.year + '/final')}>
                            <Flag tag={this.state.race.getFlagId()} size={18} />
                            <div style={{ marginLeft: 4 }}>{this.state.race.race_data.name}</div>
                        </div>
                    </div>
                    {this.state.stageResults.map(stage => <CyclistStageRow key={stage.name} stage={stage} />)}
                </div>}
            </div>
        )
    }
}

import React, { Component } from 'react'


export default class Flag extends Component {

    constructor(props) {
        super(props)

        this.state = {
            flag: null
        }
    }


    componentDidMount() {
        let flag = this.getFile(this.props.tag)
        this.setState({ flag: flag })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tag != this.props.tag) {
            let flag = this.getFile(this.props.tag)
            this.setState({ flag: flag })
        }
    }

    getFile = (name) => {
        try {
            return require('./flags/' + name.toUpperCase() + '.ico').default
        }
        catch {
            return require('./flags/_olympics.ico').default
        }
    }

    render() {
        return (
            <div>
                {<img src={this.state.flag} style={{ height: this.props.size ? this.props.size : 16 }} />}
            </div>
        )
    }
}

import Res2018 from '../data/results_2018.json'
import Res2019 from '../data/results_2019.json'

const seasons = {
    '2018': Res2018,
    '2019': Res2019
}

function results(year) {
    return seasons[year]
}

export default results
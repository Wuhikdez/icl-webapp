import Res2018 from '../data/results_2018.json'

const seasons = {
    '2018': Res2018
}

function results(year) {
    return seasons[year]
}

export default results
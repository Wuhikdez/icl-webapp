import Res2018 from '../data/results_2018.json'
import Res2019 from '../data/results_2019.json'
import Res2020 from '../data/results_2020.json'

const racedSeasons = {
    '2018': Res2018,
    '2019': Res2019,
    '2020': Res2020
}

function seasons() {
    return racedSeasons;
}

export default seasons
import Vue from 'vue'
import currency from './currencyFilter.js'
import { formatInEvaluation, timeStamp2Date, formatInPeriod } from './dateFilter.js'

const filters = {
	currency,
	timeStamp2Date,
	formatInEvaluation,
	formatInPeriod
}
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

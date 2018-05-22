const warn = console.warn
// 日期组件
export default class DateStore {
	constructor() {
		let _date = new Date()
		this._numbers = 42
		this.nowDate = {
			year: _date.getFullYear(), // 年份
			month: _date.getMonth(), // 0-11
			day: _date.getDate(), // 1~31
			weekDay: _date.getDay() // 0~6
		}
		this.year = this.nowDate.year
		this.month = this.nowDate.month
		this.day = this.nowDate.day
		this.store = []
		this.setToday()
	}
	// 设置日期
	setDate(year, month) {
		// 检测参数是否输入正确
		if (this._checkYear(year) || this._checkMonth(month)) {
			return
		}
		this.store = [] // 重新赋值
        let start = new Date(year, month, 1).getDay() // 当月第一天是星期几
        let currentMaxDays = new Date(year, month + 1, 0).getDate() // 当月的最后一天
        let preMaxDays = new Date(year, month, 0).getDate() // 上个月最后一天
        // 前一个月的日期
        while (start-- > 0) {
			this.store.unshift(preMaxDays--)
        }
        // 当月的日期
        for (let i = 1; i <= currentMaxDays; i++) {
            this.store.push(i)
        }
        // 下个月的日期
        let len = this.store.length
        let i = 1
        while (len++ < this._numbers) {
			this.store.push(i++)
        }
	}
	_checkYear(year) {
		if (typeof year !== 'number' || (year < 1970 || year > 2300)) {
			warn('wrong input year arg!')
			return true
		}
		return false
	}
	_checkMonth(month) {
		if (typeof month !== 'number' || (month < 0 || month > 11)) {
			warn('wrong input month arg!')
			return true
		}
		return false
	}
	// 设置年份
	setYear(year) {
		this.year = year
		this.setDate(year, this.month)
	}
	// 设置月份
	setMonth(month) {
		this.month = month
		this.setDate(this.year, month)
	}
	// 设置为今天的日期
	setToday() {
		this.setDate(this.nowDate.year, this.nowDate.month)
	}
}

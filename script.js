const GRID = '.grid'
const DISPLAY = '.display'
const BUTTON = 'input[type="button"]'
const DIGIT = 'nr'
const OPERATOR = 'op'
const RESET = 'input[type="reset"]'
const RESULT = '.result'


class Calculator {
    constructor(x, op, y) {
        this.x = x
        this.y = y
        this.op = op
        this.flag = true
        this.arr1 = []
        this.arr2 = []
        this.arr3 = []
        this.wynik = []

        this.bindToDisplay()
        this.bindToNumber()
        this.clearDisplay()
    }

    bindToDisplay() {
        const display = document.querySelector(DISPLAY)
        this.display = display
    }

    bindToNumber() {
        const buttons = document.querySelectorAll(BUTTON)
        buttons.forEach(button => {

            button.addEventListener('click', (e) => {
                this.display.value = ''

                if (this.flag && e.target.classList.contains(DIGIT) && this.arr2.length === 0) {
                    this.arr1.push(e.target.value)
                    this.display.value = this.arr1.join('')
                    this.x = this.display.value
                }

                if (this.flag && e.target.classList.contains(OPERATOR) && this.arr1.length !== 0) {
                    this.arr2.push(e.target.value)
                    this.display.value = this.arr2.join('')
                    this.op = this.display.value
                    this.flag = false
                }

                if (e.target.classList.contains(DIGIT) && this.arr1.length !== 0 && this.arr2.length !== 0) {
                    this.arr3.push(e.target.value)
                    this.display.value = this.arr3.join('')
                    this.y = this.display.value
                }

                if (e.target.value === '=') {
                    this.wynik.push(eval(this.x + this.op + this.y))
                    this.display.value = this.wynik.join('')

                    this.arr1 = []
                    this.arr2 = []
                    this.arr3 = []
                    this.x = ''
                    this.y = ''
                    this.op = ''
                    this.flag = false
                }
            })
        })
    }

    clearDisplay() {
        const reset = document.querySelector(RESET)
        reset.addEventListener('click', () => {
            this.arr1 = []
            this.arr2 = []
            this.arr3 = []
            this.wynik = []
            this.x = ''
            this.y = ''
            this.op = ''
            this.flag = true
        })
    }
}

calc1 = new Calculator()

function clock() {
    const Timer = document.querySelector('.clock')
    const now = new Date();
    let hour = now.toLocaleTimeString()
    Timer.innerHTML = hour
}
setInterval(clock, 1000)
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
        this.number1 = []
        this.operator = []
        this.number2 = []
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

                if (this.flag && e.target.classList.contains(DIGIT)) {
                    this.number1.push(e.target.value)
                    this.display.value = this.number1.join('')
                    this.x = this.display.value
                }

                if (e.target.classList.contains(OPERATOR) && this.number1.length !== 0 && this.number2.length === 0) {
                    this.operator.push(e.target.value)
                    this.display.value = this.operator.join('')
                    this.op = this.display.value
                    this.flag = false
                }

                if (e.target.classList.contains(DIGIT) && this.number1.length !== 0 && this.operator.length !== 0) {
                    this.number2.push(e.target.value)
                    this.display.value = this.number2.join('')
                    this.y = this.display.value
                }

                if (e.target.value === '=') {
                    this.wynik.push(eval(this.x + this.op + this.y))
                    this.display.value = this.wynik.join('')
                    this.number1 = []
                    this.operator = []
                    this.number2 = []
                    this.x = ''
                    this.y = ''
                    this.op = ''
                }
            })
        })
    }

    clearDisplay() {
        const reset = document.querySelector(RESET)
        reset.addEventListener('click', () => {
            this.number1 = []
            this.operator = []
            this.number2 = []
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

function lightDark(){
const tog = document.querySelector('.toggle')
const wrap = document.querySelector('.wrap')
const body = document.querySelector('body')
const awes = document.querySelector('.fa-sun')

tog.addEventListener('click', () => {
    tog.classList.toggle('active')
    wrap.classList.toggle('active1')
    body.classList.toggle('active1')
    awes.classList.toggle('active2')
})
}

lightDark()
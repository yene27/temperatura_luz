input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    basic.pause(500)
    basic.clearScreen()
})

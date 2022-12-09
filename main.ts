input.onButtonPressed(Button.A, function () {
    g += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendString("" + convertToText(g) + "577")
    radio.sendString("P")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendString("" + convertToText(g) + "21234567")
    radio.sendString("P")
})
input.onButtonPressed(Button.B, function () {
    g += 1
})
let g = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
radio.setGroup(200)
g = 0
basic.forever(function () {
    if (g < 0) {
        g = 0
    }
    if (9 < g) {
        g = 9
    }
    basic.showNumber(g)
})

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        . . . . .
        `)
    radio.sendString("137")
    radio.sendString("P")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        `)
    radio.sendString("1112345671234567")
    radio.sendString("221234567")
    radio.sendString("P")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . . .
        `)
    radio.sendString("237")
    radio.sendString("P")
})
radio.setGroup(200)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})

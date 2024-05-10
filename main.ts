radio.onReceivedNumber(function (receivedNumber) {
    rt = receivedNumber
})
let rt = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
rt = 0
radio.setGroup(197)
basic.forever(function () {
    if (randint(0, 100) <= 50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        while (input.soundLevel() < 120) {
            basic.pause(1)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        radio.sendString("A")
        while (rt != 1) {
            basic.pause(1)
        }
        rt = 0
    }
})

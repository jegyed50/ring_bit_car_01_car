input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(10, 10)
    basic.pause(500)
    RingbitCar.brake()
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    } else {
        if (name == "y") {
            yValue = value
        }
    }
})
let rightwheel = 0
let leftwheel = 0
let yValue = 0
let xValue = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(500)
strip.clear()
strip.setBrightness(0)
strip.showRainbow(1, 360)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Triangle)
radio.setGroup(90)
xValue = 0
yValue = 0
basic.forever(function () {
    leftwheel = yValue + xValue
    rightwheel = yValue - xValue
    RingbitCar.freestyle(leftwheel, rightwheel)
})

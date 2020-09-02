let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.setBrightness(40)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})

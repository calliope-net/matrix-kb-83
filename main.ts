function GitHub () {
    matrix.comment("calliope-net/matrix-kb-83")
    matrix.comment("Module: OLED 128x128")
    matrix.comment("optional: I²C KeyPad")
    matrix.comment("2 Erweiterungen")
    matrix.comment("calliope-net/pins")
    matrix.comment("calliope-net/matrix")
}
pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    textZeile = "" + textZeile + zeichenText
    matrix.writeTextCharset(3, 0, textZeile)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.line(64, 32, 90, 80)
    matrix.rectangle(0, 0, 127, 127)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    matrix.writeClock(30, 100, 24, 14, 6)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.rasterCircle(64, 64, 20)
    matrix.rasterCircle(64, 64, 40)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    matrix.displayAnimation(matrix.beispielRegen16x8(), 0, 0, matrix.matrix_eFaktor(matrix.eFaktor.f4), matrix.matrix_eFaktor(matrix.eFaktor.f2), 500, 0, 7)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    matrix.clearImages()
    matrix.pushImage(matrix.matrix32x8(`
        # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . # . . . . . . . . . . . . . . . . . . . . . . . # . . . . . .
        . . # # . . . . . . . . . . . . . . . . . . . # . # . . . . . .
        . . . . . # . . . . . . . . . . . . . . . . # # . . . . . . . .
        . . . . . . . . . # . # . # . . . . . . . # . . . . . . . . . .
        . . . . . . . . . . . . . . . # . # . . # . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `))
    matrix.pushImage(matrix.matrix32x8(`
        . . . . . . . . . . . . . . . . . . . . # . . . . . . . . . . .
        . . # . . . # . . # . . . . . . . # . # . # # # # . . # # # . .
        . . . . . . # # # . . . . . . # . . # . . . . . . # . . . . . .
        . . . . # # . . . . # . # # . . . . . . . . . . . . # . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . # . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `))
    matrix.pushImage(matrix.matrix32x8(`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . # . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . # . . . . . . . . # . # . # . . . . . . . .
        . . . . . # . . . # # . . # # . . . # # . . # . . . # . . . . .
        . . . # . . . # # . # . . . # # . . . . . # . # # # . # # # # .
        . . # . . . . . . . # . # . # # # . # . . # # . . . . . . . . .
        . . # # # # . # . . . . . . . . . . . . . # . . . . . . . . . .
        `))
    matrix.displayAnimation(matrix.matrix_Images(), 0, 64, matrix.matrix_eFaktor(matrix.eFaktor.f4), matrix.matrix_eFaktor(matrix.eFaktor.f4))
})
let textZeile = ""
matrix.init(matrix.ePages.y128)
matrix.writeTextCharset(0, 0, matrix.matrix_text("matrix-kb-83"))
matrix.writeTextCharset(15, 7, matrix.matrix_text("(128,128)"))
matrix.displayMatrix()
loops.everyInterval(200, function () {
    matrix.comment("folgender Block ist in Pins - Tastaturen")
    pins.raiseKeyboardEvent(true)
})

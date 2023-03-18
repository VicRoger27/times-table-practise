let i: number;
led.enable(false)
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("Hello", 0, 0)
let keypad = [[1, 2, 3, "A"], [4, 5, 6, "B"], [7, 8, 9, "C"], ["*", 0, "#", "D"]]
let pin_row = [DigitalPin.P9, DigitalPin.P6, DigitalPin.P10, DigitalPin.P4]
let pin_col = [DigitalPin.P3, DigitalPin.P2, DigitalPin.P1, DigitalPin.P0]
for (i = 0; i < 4; i++) {
    pins.digitalWritePin(pin_row[i], 0)
}
for (i = 0; i < 4; i++) {
    pins.digitalWritePin(pin_col[i], 0)
}
basic.forever(function on_forever() {
    
})

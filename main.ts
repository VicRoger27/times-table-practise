let n: string;
led.enable(false)
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("Hello", 0, 0)
let keypad = [[1, 2, 3, "A"], [4, 5, 6, "B"], [7, 8, 9, "C"], ["*", 0, "#", "D"]]
let pin_row = [DigitalPin.P9, DigitalPin.P6, DigitalPin.P10, DigitalPin.P4]
let pin_col = [DigitalPin.P3, DigitalPin.P2, DigitalPin.P1, DigitalPin.P0]
let i = 0
while (i < 4) {
    pins.digitalWritePin(pin_row[i], 0)
    i += 1
}
i = 0
while (i < 4) {
    pins.digitalWritePin(pin_col[i], 0)
    i += 1
}
while (true) {
    n = "j"
    for (let r = 0; r < 4; r++) {
        pins.digitalWritePin(pin_row[i], 1)
        for (let c = 0; c < 4; c++) {
            if (pins.digitalReadPin(pin_col[c]) == 1) {
                n = "" + keypad[r][c]
                break
            }
            
        }
        pins.digitalWritePin(pin_row[i], 0)
    }
    // if n:
    //     break
    I2C_LCD1602.ShowString("Key: " + n, 0, 0)
}
basic.forever(function on_forever() {
    
})

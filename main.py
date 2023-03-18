led.enable(False)
I2C_LCD1602.lcd_init(0)
I2C_LCD1602.show_string("Hello", 0, 0)
keypad = [[1, 2, 3, "A"],
    [4, 5, 6, "B"],
    [7, 8, 9, "C"],
    ["*", 0, "#", "D"]]
pin_row = [DigitalPin.P9, DigitalPin.P6, DigitalPin.P10, DigitalPin.P4]
pin_col = [DigitalPin.P3, DigitalPin.P2, DigitalPin.P1, DigitalPin.P0]
i = 0
while i < 4:
    pins.digital_write_pin(pin_row[i], 0)
    i += 1
i = 0
while i < 4:
    pins.digital_write_pin(pin_col[i], 0)
    i += 1
while True:
    n = "j"
    for r in range(4):
        pins.digital_write_pin(pin_row[i], 1)
        for c in range(4):
            if pins.digital_read_pin(pin_col[c]) == 1:
                n = str(keypad[r][c])
                break
        pins.digital_write_pin(pin_row[i], 0)
        #if n:
        #    break
    I2C_LCD1602.show_string("Key: " + n, 0, 0)

def on_forever():
    pass
basic.forever(on_forever)

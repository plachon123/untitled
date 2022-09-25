def kuy2():
    OLED.write_string_new_line("do you want to buy it?")
    OLED.new_line()
    OLED.write_string_new_line("A=yes  B=cancle")
def kuy():
    OLED.write_string_new_line("welcome to snack machien")
    OLED.new_line()
    OLED.write_string_new_line("A1=c A2=d A1,2=e")
    OLED.write_string_new_line("A=yes  B=cancle")
def kuy4():
    OLED.clear()
    OLED.write_string_new_line("plaese pay")
    OLED.new_line()
    OLED.write_num_new_line(_5)
    OLED.write_string("bath")
def kuy3():
    OLED.clear()
    OLED.write_string_new_line("plaese pay")
    OLED.new_line()
    OLED.write_num_new_line(_4)
    OLED.write_string("bath")
def kuy5():
    OLED.clear()
    OLED.write_string_new_line("plaese pay")
    OLED.new_line()
    OLED.write_num_new_line(_4 + _5)
    OLED.write_string("bath")
def kuy7():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.servo_write_pin(AnalogPin.P16, 180)
        pins.digital_write_pin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P16, 120)
        pins.digital_write_pin(DigitalPin.P9, 0)
        pins.digital_write_pin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P16, 180)
        pins.digital_write_pin(DigitalPin.P7, 0)
def kuy6():
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        pins.servo_write_pin(AnalogPin.P5, 180)
        pins.digital_write_pin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P5, 120)
        pins.digital_write_pin(DigitalPin.P9, 0)
        pins.digital_write_pin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P5, 180)
        pins.digital_write_pin(DigitalPin.P7, 0)
def kuy8():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.servo_write_pin(AnalogPin.P16, 180)
        pins.servo_write_pin(AnalogPin.P5, 180)
        pins.digital_write_pin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P16, 120)
        pins.servo_write_pin(AnalogPin.P5, 120)
        pins.digital_write_pin(DigitalPin.P9, 0)
        pins.digital_write_pin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P5, 180)
        pins.servo_write_pin(AnalogPin.P16, 180)
        pins.digital_write_pin(DigitalPin.P7, 0)
_4 = 0
_5 = 0
OLED.init(128, 64)
OLED.clear()
led.enable(False)
tinkercademy.crash_sensor_setup(DigitalPin.P1)
tinkercademy.crash_sensor_setup(DigitalPin.P2)
tinkercademy.crash_sensor_setup(DigitalPin.P15)
tinkercademy.crash_sensor_setup(DigitalPin.P3)
pins.digital_write_pin(DigitalPin.P9, 0)
pins.digital_write_pin(DigitalPin.P7, 0)
pins.digital_write_pin(DigitalPin.P0, 0)
pins.servo_write_pin(AnalogPin.P16, 180)
pins.servo_write_pin(AnalogPin.P5, 180)
kuy()

def on_forever():
    global _5, _4
    if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P4):
        _5 = 5
    elif tinkercademy.ad_keyboard(ADKeys.B, AnalogPin.P4):
        _5 = 10
    elif tinkercademy.ad_keyboard(ADKeys.C, AnalogPin.P4):
        _5 = 15
    elif tinkercademy.ad_keyboard(ADKeys.D, AnalogPin.P4):
        _5 = 20
    if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P10):
        _4 = 5
    elif tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P10):
        _4 = 10
    elif tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P10):
        _4 = 15
    elif tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P10):
        _4 = 20
    if tinkercademy.ad_keyboard(ADKeys.C, AnalogPin.P0):
        OLED.clear()
        OLED.write_string_new_line("A1")
        kuy2()
    elif tinkercademy.ad_keyboard(ADKeys.D, AnalogPin.P0):
        OLED.clear()
        OLED.write_string_new_line("A2")
        kuy2()
    elif tinkercademy.ad_keyboard(ADKeys.E, AnalogPin.P0):
        OLED.clear()
        OLED.write_string_new_line("A1 A2")
        kuy2()
    if tinkercademy.ad_keyboard(ADKeys.C, AnalogPin.P0):
        if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
            kuy3()
    if tinkercademy.ad_keyboard(ADKeys.D, AnalogPin.P0):
        if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
            kuy4()
    if tinkercademy.ad_keyboard(ADKeys.E, AnalogPin.P0):
        if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
            kuy5()
    if tinkercademy.ad_keyboard(ADKeys.B, AnalogPin.P0):
        OLED.clear()
        kuy()
    kuy6()
    kuy7()
    kuy8()
basic.forever(on_forever)

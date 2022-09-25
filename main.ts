function kuy2 () {
    OLED.writeStringNewLine("do you want to buy it?")
    OLED.newLine()
    OLED.writeStringNewLine("A=yes  B=cancle")
}
function kuy () {
    OLED.writeStringNewLine("welcome to snack machien")
    OLED.newLine()
    OLED.writeStringNewLine("A1=c A2=d A1,2=e")
    OLED.writeStringNewLine("A=yes  B=cancle")
}
function kuy4 () {
    OLED.clear()
    OLED.writeStringNewLine("plaese pay")
    OLED.newLine()
    OLED.writeNumNewLine(_5)
    OLED.writeString("bath")
}
function kuy_all2 () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P4)) {
        _5 = 5
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P4)) {
        _5 = 10
    } else if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P4)) {
        _5 = 15
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P4)) {
        _5 = 20
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 5
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 10
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 15
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 20
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A1")
        kuy2()
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A2")
        kuy2()
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A1 A2")
        kuy2()
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy3()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy4()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy5()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        OLED.clear()
        kuy()
    }
    kuy6()
    kuy7()
    kuy8()
    if (_4 + _5 >= 20) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
    if (_4 + _5 >= 30) {
        if (pins.digitalReadPin(DigitalPin.P3) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1)) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
    if (_4 + _5 >= 40) {
        if (pins.digitalReadPin(DigitalPin.P15) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1))) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
}
function kuy3 () {
    OLED.clear()
    OLED.writeStringNewLine("plaese pay")
    OLED.newLine()
    OLED.writeNumNewLine(_4)
    OLED.writeString("bath")
}
function kuy5 () {
    OLED.clear()
    OLED.writeStringNewLine("plaese pay")
    OLED.newLine()
    OLED.writeNumNewLine(_4 + _5)
    OLED.writeString("bath")
}
function kuy_all () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P4)) {
        _5 = 5
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P4)) {
        _5 = 10
    } else if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P4)) {
        _5 = 15
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P4)) {
        _5 = 20
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 5
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 10
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 15
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P10)) {
        _4 = 20
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A1")
        kuy2()
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A2")
        kuy2()
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        OLED.clear()
        OLED.writeStringNewLine("A1 A2")
        kuy2()
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy3()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy4()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
            kuy5()
        }
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        OLED.clear()
        kuy()
    }
    kuy6()
    kuy7()
    kuy8()
    if (_4 + _5 >= 20) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
    if (_4 + _5 >= 30) {
        if (pins.digitalReadPin(DigitalPin.P3) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1)) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
    if (_4 + _5 >= 40) {
        if (pins.digitalReadPin(DigitalPin.P15) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1))) {
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.digitalWritePin(DigitalPin.P9, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 120)
            pins.servoWritePin(AnalogPin.P5, 120)
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P5, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
}
function kuy7 () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.servoWritePin(AnalogPin.P16, 180)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P16, 120)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P16, 180)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
}
function kuy6 () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P5, 180)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P5, 120)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P5, 180)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
}
function kuy8 () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        pins.servoWritePin(AnalogPin.P16, 180)
        pins.servoWritePin(AnalogPin.P5, 180)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P16, 120)
        pins.servoWritePin(AnalogPin.P5, 120)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P5, 180)
        pins.servoWritePin(AnalogPin.P16, 180)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
}
let _4 = 0
let _5 = 0
OLED.init(128, 64)
OLED.clear()
led.enable(false)
tinkercademy.crashSensorSetup(DigitalPin.P1)
tinkercademy.crashSensorSetup(DigitalPin.P2)
tinkercademy.crashSensorSetup(DigitalPin.P15)
tinkercademy.crashSensorSetup(DigitalPin.P3)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P7, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.servoWritePin(AnalogPin.P16, 180)
pins.servoWritePin(AnalogPin.P5, 180)
kuy()
basic.forever(function () {
    kuy_all()
})

import React, { useState } from 'react'
import Birthday from './signup/Birthday'
import Bitmoji from './signup/Bitmoji'
import Email from './signup/Email'
import Name from './signup/Name'
import Username from './signup/Username'

const Screens = {
    1: Name,
    2: Birthday,
    3: Bitmoji,
    4: Username,
    5: Email
}

const Signup = () => {

    const [screen, setScreen] = useState(1)
    const Screen = Screens[screen]

    function next() {
        setScreen(screen + 1)
    }

    return (
       <Screen next={next} />
    )
}

export default Signup
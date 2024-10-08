"use client"

import React, {useEffect, useState} from 'react'
import MobileServices from './page';
import DesktopServices from "./indesx"

function MiddleWare({rawData}) {
    const [isPhone, setPhone] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 700) {
            setPhone(true);
        }
    }, [window.innerWidth])
  return (
    isPhone ? <MobileServices data={rawData} /> : <DesktopServices data={rawData} />
)
}

export default MiddleWare
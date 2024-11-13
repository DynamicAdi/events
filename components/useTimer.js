import React, { useEffect, useState } from 'react'

function useTimer() {
    const [launch, setLaunch] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLaunch(false);
      }, 3000)
    }, [])

    return {launch}
}

export default useTimer
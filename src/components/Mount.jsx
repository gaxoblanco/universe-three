import React from 'react'
import { useTransition, animated } from 'react-spring'

export function Mount({panel, setPanel}) {
    const transitions = useTransition(panel, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.molasses
    })

  return (
    <div>
        {children}
    </div>
  )
}

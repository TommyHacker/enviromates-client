import React, { useRef, useEffect, useState, useCallback } from 'react';
import './style.css'

function Coordinates({ map }) {
  const [position, setPosition] = useState(() => map.getCenter())
  const center = [51.505, -0.09]
  const zoom = 13
  
  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p className='coordinates-tool'>
        DEV TOOLS: <br/>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}

export default Coordinates
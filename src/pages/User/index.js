import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function User() {
  const navigate = useNavigate()

  return (
    <>
      <main>
        <h2>Welcome there, {username}!</h2>
      <br />
      <br />
        <Button variant="info" onClick={() => navigate('/:username/create-event')}>Create an Event</Button>
        <Button variant="info" onClick={() => navigate('/:username/attend-event')}>Attend an Event</Button>

      </main>
			
// 			<footer className="footer">
// 			</footer>
			
     </>
  )
};




import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Map } from '../../components'

export default function User() {
  const navigate = useNavigate()

  return (
    <>
      <main>
        {/* <h2>Welcome there, {username}!</h2> */}
      <br />
      <br />
        <Button variant="info" onClick={() => navigate('/create-event')}>Create an Event</Button>
        <Button variant="info" onClick={() => navigate('/attend-event')}>Attend an Event</Button>

      </main>

      <Container>
          <Map />
			</Container>

			<footer className="footer">
 			</footer>
			
     </>
  )
};




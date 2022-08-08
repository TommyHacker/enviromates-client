import React from 'react'
import Button from 'react-bootstrap/Button';


export default function User() {
  return (
    <div className="bodycss">
      <header> 
        <div className="top"></div>
        <br />
        <br />
        <h1 className="logo">EnviroMate Logo</h1>
        <br />
        <br />
      </header>

      <main>
        <h2 className="heading">Welcome there, {name}!</h2>
      <br />
      <br />
        <Button variant="info">Create Event</Button>{' '}
        <Button variant="info">Attend Event</Button>{' '}

      </main>
			
			<footer className="footer">


			</footer>
			
		</div>

  )
};



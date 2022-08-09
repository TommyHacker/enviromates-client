import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



export default function CreateEvent() {
  return (

    <div>

    <Button variant="info">Create Event</Button>{' '}

      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="hostUsername">
                <Form.Label>Host Username</Form.Label>
                <Form.Control type="text" placeholder="Type your username" name="username" value={state.username} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter the location" name="location" value={state.location} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEventName">
                <Form.Label>Name of the event</Form.Label>
                <Form.Control type="text" placeholder="Last name" name="eventName" value={state.eventName} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Describe the event" name="description" value={state.description} onChange={handleInput} />
            </Form.Group>

            <Form.Select onClick={handleLevel} className="mb-3" aria-label="Difficulty">
              <option>Difficulty</option>
              <option value="easy" >1</option>
              <option value="medium">2</option>
              <option value="hard">3</option>
            </Form.Select>     

            <Form.Group controlId="formEventDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" name="eventDate" value={state.eventDate}/>
            </Form.Group>

            {/* additional fields ??? */}
          
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>

  )
}


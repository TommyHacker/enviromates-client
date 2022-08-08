import React from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

export default function RegisterForm() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Type your username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Type your password" />
            </Form.Group>
          
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    
    </div>
  )
}


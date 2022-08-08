import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitDetails, setSubmitDetails] = useState('')
    const navigate = useNavigate()

    function handleInput(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubmitDetails(username, password)
        useNavigate('/:username', {state: {username: username, password: password}})
        setUsername('')
        setPassword('')
    }

  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Type your username" value={username} onChange={handleInput}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Type your password" value={password} onChange={handlePassword} />
            </Form.Group>
          
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>
  )
}

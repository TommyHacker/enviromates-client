import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimBtn from '../AnimBtn'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitDetails, setSubmitDetails] = useState('')
    const [isClicked, setIsClicked] = useState(false);
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
        setIsClicked(!isClicked)
        navigate('/username', {state: {username: username, password: password}})
        setUsername('')
        setPassword('')
    }

  return (
    <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Type your username" value={username} onChange={handleInput}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Type your password" value={password} onChange={handlePassword} />
                </Form.Group>

                <AnimBtn />
            
                <Button className="submitBtn" variant="primary" type="submit"> {isClicked ? "Hide" : "Show"} Submit</Button>
                {isClicked && <AnimBtn />}
            </Form>
        </Container>
    </>
  )
}

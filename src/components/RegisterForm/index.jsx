import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

export default function RegisterForm() {

    const [state, setState] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })
    const [submitDetails, setSubmitDetails] = useState('')
    const navigate = useNavigate()

    function handleInput(e){
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     setSubmitDetails(username, firstName, lastName, email, password)
    //     navigate('/:username', {state: {
    //         username: username,
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         password: password
    //     }})
    // }

    function handleSubmit(e){
        e.preventDefault();
        setSubmitDetails('Submitting...')
        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            body: JSON.stringify(state)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setSubmitDetails('Successfully registered!')
                navigate('/login')
            }
            else{
                setSubmitDetails(data.message)
            }
        })
        .catch(err => {
            setSubmitDetails('Error!')
        })
    }


  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="registerUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Type your username" name="username" value={state.username} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" name="firstName" value={state.firstName} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" name="lastName" value={state.lastName} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={state.email} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Type your password" name="password" value={state.firstName} onChange={handleInput} />
            </Form.Group>
          
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    
    </div>
  )
}


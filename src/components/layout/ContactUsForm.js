import React, { useState  } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import db from '../../firebase';

const ContactUsForm = () => {

    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendForm = (e) => {
        e.preventDefault()

        if(currentUser.email) {
            setEmail(currentUser.email)
        }

        db.collection('contactUsForm').add({
            name: name,
            email: email,
            message: message
        })
        .then((
            setSuccess(true)
        ))
        .catch((err) => {
            console.log(err)
            setError('Message could not send')
        })
    }

    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            {success ? <h1>thank you for your submission</h1> : 
            <div className="form-container">
                <form className="form" onSubmit={ sendForm } >
                    <h4>Have a question?</h4>
                    <h1 className="form-title">Contact us here!</h1>
                    <div className="input-group">
                        <input type="Name" className="form-input"  placeholder="Name" onChange={(e) => setName(e.target.value)}/> 
                    </div>
                    <div className="input-group">

                        <input type="email" className="form-input"  placeholder="Email" onChange={(e) => setEmail(e.target.value)}/> 
                    </div>
                    <div className="input-group">
                        <textarea type="password" className="form-input"  placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className="w-100 mt-2">
                        <Button className="btn form-btn" type="submit">Send</Button>
                    </div>
                </form>
            </div> }
        </div>
    )
}

export default ContactUsForm;
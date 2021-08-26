import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import db from '../../firebase';

const Post = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [visible, setVisible] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

        db.collection("paintings").add({
            title: title,
            price: price
        })
        .then(() => {
            setVisible(true)
            setSuccess('Post created!')
            setTitle('')
            setPrice('')
        })
        .catch((err) => { 
            console.log(err)
            setError('Failed to create post')
            setTitle('')
            setPrice('')
        })
    }
    
    return (
        <div className="wrapper">
            {error && <Alert variant="danger" show={ visible } onClose={() => setVisible(false)} dismissible >{ error }</Alert>}
            {success && <Alert variant="success" show={ visible } onClose={() => setVisible(false)} dismissible>{ success }</Alert>}
            <div className="form-container">
                <form className="form" id="createAccountForm" onSubmit={handleSubmit}>
                    <h1 className="form-title">Create Listing</h1>
                    {/* <div className="input-group">
                        <input type="file" className="form-input" required/>
                    </div> */}
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-input"  
                            placeholder="Title" 
                            value={ title }
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="number" 
                            className="form-input"  
                            placeholder="price in US" 
                            value={ price }
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    {/* <div className="input-group">
                        <textarea className="form-input" placeholder="Description" ref={ descRef } />
                    </div> */}
                    <Button className="btn form-btn" type="submit">Post</Button> 
                </form>
            </div>
        </div>
    )
}

export default Post

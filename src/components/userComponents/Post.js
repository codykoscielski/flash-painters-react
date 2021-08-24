import React, { useState, useRef } from 'react'
import { Alert, Button } from 'react-bootstrap';

const Post = () => {

    const priceRef = useRef()
    const titleRef = useRef()
    const descRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="form-container">
                <form className="form" id="createAccountForm" onSubmit={handleSubmit}>
                    <h1 className="form-title">Create Listing</h1>
                    <div className="input-group">
                        <input type="file" className="form-input" required/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-input"  placeholder="Title"  ref={ titleRef } required/>
                    </div>
                    <div className="input-group">
                        <input type="number" className="form-input"  placeholder="price in US" ref={ priceRef } required/>
                    </div>
                    <div className="input-group">
                        <textarea className="form-input" placeholder="Description" ref={ descRef } />
                    </div>
                    <Button className="btn form-btn" type="submit" disabled={ loading }>Post</Button> 
                </form>
            </div>
        </div>
    )
}

export default Post

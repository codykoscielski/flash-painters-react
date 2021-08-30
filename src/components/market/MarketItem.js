import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../contexts/AuthContext';

const MarketItem = ({painting: { title, imgURL, price }}) => {

    console.log(imgURL)
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src={ imgURL }/>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>${ price }</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default MarketItem

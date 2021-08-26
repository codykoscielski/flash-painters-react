import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MarketItem = ({painting: { title, artistName, price }}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <p>${ price }</p>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default MarketItem

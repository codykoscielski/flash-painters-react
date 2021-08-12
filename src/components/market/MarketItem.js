import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MarketItem = ({painting: { paintingName, artistName, description }}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ paintingName}</Card.Title>
                <Card.Subtitle>{ artistName }</Card.Subtitle>
                <Card.Text>
                    { description }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default MarketItem

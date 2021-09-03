import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MarketItem = ({painting: { title, imageURL, price, artistName }}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src={ imageURL }/>
                <Card.Title>{ title }</Card.Title>
                <Card.Subtitle>{ artistName }</Card.Subtitle>
                <Card.Text>${ price }</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default MarketItem

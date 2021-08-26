import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../contexts/AuthContext';

const MarketItem = ({painting: { title, artistName, price }}) => {

    const { currentUser } = useAuth();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src="https://firebasestorage.googleapis.com/v0/b/flash-painters.appspot.com/o/IMG_1623.JPG?alt=media&token=4739b253-5182-4dca-99bb-5aa36fceb30e"/>
                <Card.Title>{ title }</Card.Title>
                <Card.Subtitle>{ currentUser.displayName }</Card.Subtitle>
                <Card.Text>${ price }</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default MarketItem

import React from 'react';
import Button from 'react-bootstrap/Button';

const MarketItem = ({painting: { title, imageURL, price, artistName }}) => {

    return (
        <div className='card-box'>
            <img src={ imageURL } alt={ title } />
            <div className="card-body">
                <div className="card-text">
                    <h4>{ title }</h4>
                    <p>{ artistName }</p>
                </div>
                <div className="card-price">
                    <h4>${ price }</h4>
                </div>
            </div>
        </div>
    )
}

export default MarketItem

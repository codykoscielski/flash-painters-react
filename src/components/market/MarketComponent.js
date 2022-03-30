import React, { useState, useEffect } from 'react';
import MarketItem from './MarketItem';
//DB import from firebase.js
import db from '../../firebase';

const MarketComponent = () => {

    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        //Using snapshot method to auto update the DB
        db.collection('paintings').onSnapshot(snapshot => {
            //mapping through each item in the paintings collection
            setPaintings(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))) //Getting the ID for mapping
        })

    }, []);

    return (
        <div className="market-box">
            {/* Mapping over each painting and seeing it as a prop to marketitem */}

            {paintings.length > 0 ? paintings.map((painting) => (
                <MarketItem  key={ painting.id } painting={ painting } />
            )) : 
            <div>
                <h2>Oops...</h2>
                <p>Sorry bud, It looks like there are currently no paitings</p>
                <p>Please check back later!</p>
            </div>
            }
        </div>
    )
}

export default MarketComponent;

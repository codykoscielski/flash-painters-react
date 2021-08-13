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
        <div>
            {/* Mapping over each painting and seeing it as a prop to marketitem */}
            {paintings.map((painting) => (
                <MarketItem  key={ painting.id } painting={ painting } />
            ))}
        </div>
    )
}

export default MarketComponent;

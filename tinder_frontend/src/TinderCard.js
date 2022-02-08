import React, { useEffect, useState } from 'react';
import TinderCards from 'react-tinder-card';
import axios from './axios';
import './TinderCard.css';

function TinderCard() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nametoDelete) => {
        console.log('removing: ' + nametoDelete);
    }

    const outOfFrame = (name) => {
        console.log(name +' left the screen');
    }

    return(
        <div className='TinderCard'>
            <div className='TinderCard__cardContainer'>
            {people.map((person) => (
                    <TinderCards
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    <div style={{backgroundImage:'url('+person.imgUrl+')'}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCards>
                ))}
            </div>
        </div>
    )
}

export default TinderCard;
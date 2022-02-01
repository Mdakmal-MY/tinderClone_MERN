import React, { useState } from 'react';
import TinderCards from 'react-tinder-card';
import './TinderCard.css';

function TinderCard() {
    const [people] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
        },

    ]);

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
                    <div style={{backgroundImage:'url('+person.url+')'}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCards>
                ))}
            </div>
        </div>
    )
}

export default TinderCard;
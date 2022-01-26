import React, { useState } from 'react';
import './TinderCard.css';
import TinderCards from 'react-tinder-card';

function TinderCard() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
        {
            name: 'Jeff Besof',
            url: 'https://en.wikipedia.org/wiki/Jeff_Bezos#/media/File:Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_(39074799225)_(cropped).jpg'
        }

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
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    </TinderCards>
                ))}
            </div>
        </div>
    )
}

export default TinderCard;
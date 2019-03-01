import React from 'react';
import Card from './Card';

const CardList = ({ kitties }) => {
    const cardComponent = kitties.map((x, i) => {
        return <Card name={kitties[i].name} email={kitties[i].email} key={kitties[i].id} id={kitties[i].id}/>;
    });
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;
import React from 'react';

const Card = ({ name, email, id }) => {
    return(
        <div className='tc bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt='kitty img' src={`https://robohash.org/${id}?set=set4&size=200x200`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
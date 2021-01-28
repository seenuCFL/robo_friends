import React from 'react';

const Card = ( { name, email, id} ) =>  {
    return(
        <div className='tc bg-light-green dib br3 pa3 bw2 shadow-5 ma2 grow'>
            <img alt='robo' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
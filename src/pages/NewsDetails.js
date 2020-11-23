import React, { useContext } from 'react';
import { NewsContext } from '../App';

export const NewsDetails = () => {

    const { newsList } = useContext(NewsContext);

    return (
        <div>
            <h1>{newsList?.title}</h1>
            <img src={newsList?.urlToImage} alt={'News Details'} />
            <p>{newsList?.description}</p>
        </div>
    )
}
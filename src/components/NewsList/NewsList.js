import React, {useContext} from 'react';
import {NewsCard} from "../NewsCard/NewsCard";
import {NewsContext} from '../../App';
import './NewsList.style.css';

export const NewsList = () => {

    const { newsList } = useContext(NewsContext);

    return (
        <div className="newsCard">
            {newsList?.map((news, index) => (
                <NewsCard key={index} {...news} />
            ))}
        </div>
    )
}


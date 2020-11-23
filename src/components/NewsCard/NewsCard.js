import React from 'react';
import './NewsCard.style.css';

export const NewsCard = ({key, news}) => {
    // console.log(news);
    return (
        <div className = 'newsCardWrapper'>
            {/* <img src = {news.urlToImage} style = {{height: 85}}></img> */}
            <p className = 'newsCardText'>{news.title}</p>
            {/* <p>{news.description}</p> */}
        </div>
    )
}

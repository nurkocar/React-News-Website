import React, { useContext } from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { NewsContext } from '../App';
import "./NewsDetails.style.css";

export const NewsDetails = () => {

    const { newsList, selectedNews, selectedCategory } = useContext(NewsContext);
    console.log(selectedNews);


    return (
        <div className='newsContainer'>
            <div className='newsDetail'>
                <h1>{selectedNews?.title}</h1>
                <img className='newsImage' src={selectedNews?.urlToImage} alt={'News Details'} />
                <p>{selectedNews?.description}</p>
            </div>
            <div className = 'newsCardContainer'>
                <h3>Other {selectedCategory} News</h3>
                <div className='newsCard'>
                    <NewsList newsList={newsList}/>
                </div>
            </div>

        </div>
    )
}
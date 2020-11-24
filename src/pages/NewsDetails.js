import React, { useContext } from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { NewsContext } from '../App';
import "./NewsDetails.style.css";

export const NewsDetails = () => {

    const { newsList, setSelectedNews, selectedNews, selectedCategory } = useContext(NewsContext);
    console.log(selectedNews);


    return (
        <div className='newsContainer'>
            <div className='newsDetail'>
                <h2>{selectedNews?.title}</h2>
                <img className='newsImage' src={selectedNews?.urlToImage} alt={'News Details'} />
                <p>{selectedNews?.content}</p>
            </div>
            <div className = 'newsCardContainer'>
                <h3>Other {selectedCategory} News</h3>
                <div className='newsCard'>
                    <NewsList newsList={newsList} setSelectedNews = {setSelectedNews}/>
                </div>
            </div>

        </div>
    )
}
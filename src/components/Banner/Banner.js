import React, {useContext} from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {useHistory} from 'react-router-dom';
import './Banner.style.css';

import { NewsContext } from "../../App";

export const Banner = () => {

    const history = useHistory();
    const { newsList } = useContext(NewsContext);

    return(
        <Slider>
            {newsList.map((news, index) =>
                // <a className = 'bannerAnchor' href = {`${news.url}`}>
                    <div
                        className='bannerContainer'
                        key={index}
                        onClick = {() => history.push(`/detail/${index}`)}
                    >
                        <h2>{news.title}</h2>
                        <img className='bannerImage' src={news.urlToImage} />
                    </div>
                // </a>
            )}
        </Slider>
    )
}

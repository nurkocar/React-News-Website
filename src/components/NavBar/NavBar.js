import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {NewsContext} from '../../App';



export default function Navbar() {

    const {categorySource, setSelectedCategory} = useContext(NewsContext);

    return (
        <div>
                {categorySource.map(
                    (item, i) => (
                        <Link
                            key={i}
                            style={{ paddingRight: 10 }}
                            onClick={() => {
                                setSelectedCategory(item.category);
                            }
                            }
                            to='/'
                        >{item.category}</Link>
                    )
                )}
        </div>
    )
}
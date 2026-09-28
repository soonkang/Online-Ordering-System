import React, { useState } from 'react';
import './Gallery.css';


const Photo = () => {
    let data = [
        {
            id: 1,
            imgSrc: './asset/images/abalonesalad.png',
        },
        {
            id: 2,
            imgSrc: './asset/images/logo.png',
        },
        {
            id: 3,
            imgSrc: './asset/images/healthy.jpg',
        },
        {
            id: 4,
            imgSrc: './asset/images/mojito.png',
        },
        {
            id: 5,
            imgSrc: './asset/images/tomatobasilsoup.png',
        },
        {
            id: 6,
            imgSrc: './asset/images/lobsterthermidor.png',
        },
        {
            id: 7,
            imgSrc: './asset/images/margarita.png',
        },
        {
            id: 8,
            imgSrc: './asset/images/chefs.png',
        },
        {
            id: 9,
            imgSrc: './asset/images/braisedpork.png',
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgSrc} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Photo;

import React, { useState, useEffect } from "react";
import './ResultPage.css'
import { Link } from "react-router-dom";
import resultImg from '../images/result-img.png'
import arrow from '../images/svg.png'

const ResultPage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');


    useEffect(() => {
        fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
            .then(res => res.json())
            .then(data => {

                setTitle(data.products[5].title)
                setPrice(data.products[5].variants[0].price)
                setImg(data.products[5].images[0].src)
                let currentDescriptionRes = data.products[5].body_html;
                const cleanText = currentDescriptionRes.replace(/<.*?>/g, '')
                setDescription(cleanText)

            })
    }, [])

    return <>
        <div className="result-container">
            <div className="result-content">
                <h1>Build you everyday self <br /> care routine.</h1>
                <p>{description}</p>
                <Link to={'/'} className="retake">Retake the quiz</Link>
            </div>
            <div className='quiz-result'>
                <div className='daily-routines'>
                    <h1>Daily routine</h1>
                    {description}
                </div>
                <div className="result-images-content">
                    <div className="product-card">
                        <div className="result-img-wrapper">
                            <img src={img} alt='product' />
                        </div>
                        <h2>{title}</h2>
                        <span>${price}</span>
                        <div className="three-dots-div">
                            <div className="dot1"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="result-img-wrapper">
                            <img src={resultImg} alt='product' />
                        </div>
                        <h2>Milk Body Cleanser</h2>
                        <span>$14.00</span>
                    </div>
                </div>
                <div className="right-arrow-pic">
                    <img src={arrow} alt='product' />
                </div>
            </div>

        </div>

    </>

}

export default ResultPage;
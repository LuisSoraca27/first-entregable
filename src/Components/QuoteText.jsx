import React, { useState } from 'react';
import quotes from '../quotes.json'
import '../App.css'

const QuoteText = () => {

    let colors =['#7D7C84','#2D93AD','#DE8F6E','#88AB75','#DBD56E','#FF88DC','#91A6FF','#FAFF7F','#FF5154','#820B8A','#7B0D1E','#9F2042']

    let numRamdom = Math.floor(Math.random() * quotes.length)
    const [index, setIndex] = useState(numRamdom)

    let colorRandom = Math.floor(Math.random() * colors.length)
    const color = colors[colorRandom]

    const generateNum = () => {
        setIndex(Math.floor(Math.random() * quotes.length)) 
        setIndexColor
    }
    document.body.style = `background: ${color}`

    return (
        
        <div className='card' style={{color: color}}>
            <div className='quoteCard'>
                <div className='helper'>
                    <i className="fa-solid fa-quote-left "></i>
                </div>
                <div>
                    <h4 style={{color:'colors[0]'}}>{quotes[index].quote}</h4>
                </div>
            </div>
            <p>{quotes[index].author}</p>
            <button onClick={generateNum} ><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default QuoteText;
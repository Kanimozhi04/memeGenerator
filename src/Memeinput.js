import React, { useState } from 'react';
import memesDetails from './memesDetails';
export default function Memeinput()
{
    const [meme,setmeme]=useState({
         topText:"",
         bottomText:"",
         url: "https://i.imgflip.com/1g8my4.jpg"
    })
 
    
    function onSubmit()
    {
        const memesArray=memesDetails.data.memes;
        const randomNo=Math.floor(Math.random()*memesArray.length);
        const url=memesArray[randomNo].url;
        setmeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }
    function handleChange(event)
    {
        const {name, value} = event.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    
    }
    return(
     <main>  
        <div className="meme">
          <input type="text" placeholder="enter top text" className="memeInput" name="topText" value={meme.topText} onChange={handleChange}/>
          <input type="text" placeholder="enter bottom text" className="memeInput" name="bottomText" value={meme.bottomText} onChange={handleChange} />
          <button className="btncls" onClick={onSubmit}>Get a new meme image</button>
        </div>
        <div className="memeDisplay">
            <img src={meme.randomImage} className="memeImg"/>
            <h2 className="memeTop">{meme.topText}</h2>
            <h2 className="memeBottom">{meme.bottomText}</h2>
        </div>
    </main>
    );


}
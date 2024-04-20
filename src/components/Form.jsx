import { useState } from "react"
import memesData from "./memesData"



const Form = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
  return (
    <main>
    <div className="h[170px]  flex flex-col items-center my-10">
        <div className="grid grid-cols-2 w-[477px]  ">
        <label htmlFor="first" className=" text-black font-medium ">Top text</label>
        <label htmlFor="second" className="ml-5 text-black font-medium ">Bottom text</label>
      <input type="text" name="first" id="first" className="top-text border w-[220px] h-[34px] border-lightGray rounded pl-3 text-gray "/>
      <input type="text" name="second" id="second" className="bottom-text border w-[220px] h-[34px] border-lightGray rounded ml-5 pl-3 text-gray"/>
      </div>
      <button  onClick={getMemeImage} type="submit" className="w-[477px] text-center text-white h-[40px] rounded bg-gradient-to-r from-darkPurple to-lightPurple mt-4 hover:opacity-75">Get a new meme image</button>
    </div>
    <img src={meme.randomImage} alt="" className="w-[477px] h-[268px] ml-10 "/>
    </main>
  )
}

export default Form

import troll from '../assets/Troll Face.png'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-darkPurple to-lightPurple h-[65px] w-[550px] flex items-center justify-around">
    <img src={troll} alt="" className='w-[31px] h-[26px] -ml-6'/>
    <h1 className='-ml-24'>Meme generator</h1>  
    <p className='-pr-2 text-white'>React Course-project</p>
    </header>
  )
}

export default Header

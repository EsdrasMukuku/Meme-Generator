

const Form = () => {
  return (
    <form className="h[170px]  flex flex-col items-center my-10">
        <div className="grid grid-cols-2 w-[477px]  ">
        <label htmlFor="first" className=" text-black font-medium ">Top text</label>
        <label htmlFor="second" className="ml-5 text-black font-medium ">Bottom text</label>
      <input type="text" name="first" id="first" className="border w-[220px] h-[34px] border-lightGray rounded pl-3 text-gray"/>
      <input type="text" name="second" id="second" className="border w-[220px] h-[34px] border-lightGray rounded ml-5 pl-3 text-gray"/>
      </div>
      <button type="submit" className="w-[477px] text-center text-white h-[40px] rounded bg-gradient-to-r from-darkPurple to-lightPurple mt-4">Get a new meme image</button>
    </form>
  )
}

export default Form

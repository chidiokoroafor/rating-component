
const Rate = ({ value, handleRating, rating }) => {
    
  return (
    <button onClick={()=>handleRating(value)} className={`bg-dark-blue flex justify-center items-center hover:bg-primary hover:text-black font-bold text-light-grey sm:w-14 h-13 w-12 sm:h-14 rounded-full md:p-4 p-2 transition-all ease-in-out duration-500 ${rating == value ? 'bg-white text-black' : ''}`}> {value} </button>
  )
}

export default Rate
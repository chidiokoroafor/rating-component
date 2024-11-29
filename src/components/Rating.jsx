import Content from "./Content"

const Rating = () => {
   
  return (
    <div>
        <div className='bg-dark-blue mb-7 rounded-full p-2 w-9 h-9 flex justify-center items-center'>
            <img src="/images/icon-star.svg" alt="" />
        </div>
        <Content />
        
    </div>
  )
}

export default Rating
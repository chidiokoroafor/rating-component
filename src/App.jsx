import { useState } from 'react'
import Rate from './components/Rate'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'


function App() {
  const [rating, setRating] = useState(0)
  const [submited, setSubmited] = useState(false)

  const handleRating = (i) => {
    setRating(i)
  }

  return (
    <main className='grid justify-items-center min-h-screen w-full  items-center'>
      <div className="bg-very-dark-blue font-body max-w-[350px]  w-[90%] p-7 rounded-xl">

      {!submited ? <div>
          <Rating />
          <div className='flex justify-between items-center mb-6'>
          {
              [...Array(5)].map((_,index)=> {
                index += 1;
                return (
              <Rate value={index} rating={rating} handleRating={handleRating} key={index} />
              )})
            }
          </div>
          <div>
          <button onClick={()=>setSubmited(true)} className='bg-primary w-full py-2 border-none rounded-2xl hover:bg-white font-bold transition-all ease-in-out duration-500'>Submit</button>
          </div>
        </div> : <ThankYou  rate={rating}/>}
        
        
      </div>
    </main>
  )
}

export default App

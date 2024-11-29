
const Content = ({ center }) => {
  return (
    <div className={`mb-4 ${center? 'text-center':'text-left'}`}>
        <h3 className='text-white text-2xl mb-3'> How did we do?</h3>
        <p className='text-light-grey text-sm'>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
      </div>
  )
}

export default Content
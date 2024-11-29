
const ThankYou = ({ rate }) => {
  return (
    <div className='flex flex-col items-center'>
        <img className='mx-auto mb-6' src="/images/illustration-thank-you.svg" alt="" />
        <div className='bg-dark-blue mb-6 text-primary mx-auto inline-block py-1 px-3 rounded-2xl'>
            You selected {rate} out of 5
        </div>
        <div className={`mb-4 text-center`}>
        <h3 className='text-white text-2xl mb-3'> Thank you!</h3>
        <p className='text-light-grey text-sm'>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default ThankYou
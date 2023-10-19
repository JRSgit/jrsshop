import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ name, img, price, off, id }) {
  const navigate = useNavigate()

  const handleClickDetails = (i) => {
    navigate(`/product/${i}`)
  }

  return (
    <div
      onClick={() => handleClickDetails(id)}
      className='flex relative w-fit flex-col rounded-lg border-4 cursor-pointer hover:border-blue-500 overflow-hidden max-h-[250px] md:max-h-[280px]'>
      {off > 0 && (<div className='absolute top-2 left-2 rounded-xl text-white text-lg rotate-12 p-2 bg-button-action'>{off}% off</div>)}
      <img
        className='md:max-w-[300px] h-[180px]  md:max-h-[320px] object-cover'
        src={img} alt="" />
      <div className='flex md:p-4 flex-col w-full md:h-[150px]  bg-primary'>
        {off ? (
          <div className='flex w-full items-center justify-between'>
            <span className='text-gray-500 md:text-xl text-sm font-bold'> De R$ {parseFloat(price).toFixed(2)}</span>
            <span className='text-red-500 md:text-lg text-sm font-bold'> Por R$ {(parseFloat(price)) - (parseFloat(price) * (off / 100))}</span>
          </div>
        ) : (
          <span className='text-white font-bold md:text-xl ml-2 text-sm'>R$ {parseFloat(price).toFixed(2)}</span>

        )}
        <span className='md:text-xl ml-2 text-sm font-bold'>{name}</span>

      </div>
    </div>
  )
}

export default Card
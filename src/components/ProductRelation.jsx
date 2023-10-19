/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

import star from '../assets/star.png'
import rating from '../assets/rating.png'
import { useEffect } from 'react';


export function Swipers({ products }) {
  const navigate = useNavigate()


  const handleClickDetails = (id) => {
    navigate(`/product/${id}`)
  }
  useEffect(() => {
    console.log(products)

  }, [])

  return (
    <>
      <Swiper
        navigation={true} modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        className="md:w-[90%] w-full h-[410px] p-2 flex items-center justify-center"
      >
        {
          products && products.map((prod, i) => (
            <SwiperSlide
              className='w-full h-full flex px-4 flex-col items-center '
              key={i} onClick={() => handleClickDetails(prod._id)}>
              <div className='w-full h-full rounded-md hover:cursor-pointer hover:shadow-2xl transition-all border overflow-hidden'>
                <img
                  className='w-full h-[280px] object-cover'
                  src={prod.url[0]} alt="" />
                <div className='flex p-4 flex-col w-full h-[100px] bg-white'>
                  <div className="flex items-center justify-between">
                    <span className="text-segundary text-2xl"> R$ {prod.price.toFixed(2)}</span>
                    <div className="flex gap-1">
                      <img width={15} src={star} alt="" />
                      <img width={15} src={star} alt="" />
                      <img width={15} src={star} alt="" />
                      <img width={15} src={rating} alt="" />
                    </div>
                  </div>
                  <small className="text-button-action text-sm">10x de {parseFloat(prod.price) / 10}0</small>
                  <span className="text-2xl font-bold mb-2">{prod.name}</span>
                  <p className="text-gray-700">{prod.title}</p>
                </div>
              </div>

            </SwiperSlide>

          ))
        }
      </Swiper>
    </>
  )
}

function ProductRelation() {


  return (
    <div className="p-2 flex mt-2 rounded-md flex-col gap-1 w-[30%] bg-white">
      <div className='w-full bg-red-500 p-4 rounded-md'>
        <h1>Meios de Pagamentos</h1>
      </div>

    </div>
  )
}

export default ProductRelation
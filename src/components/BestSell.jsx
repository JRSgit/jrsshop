import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import { bestSellProduct } from '../services/api'

import star from '../assets/star.png'
import rating from '../assets/rating.png'


export default function BestSell() {
  const navigate = useNavigate()

  const [bestProduct, setBestProduct] = useState(null)

  useEffect(() => {
    const request = async () => {
      try {
        const bestSell = await bestSellProduct()

        setBestProduct(bestSell.data)
      } catch (error) {
        return error.message
      }
    }
    request()
  }, [])

  const handleClickDetails = (id) => {
    navigate(`/product/${id}`)
  }

  // const bestSell = [
  //   {
  //     name: 'Tênis Balmain',
  //     price: '337,00',
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //   },
  //   {
  //     name: 'Tênis Balmain',
  //     price: '337,00',
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //   },
  //   {
  //     name: 'Tênis Balmain',
  //     price: '337,00',
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //   },
  //   {
  //     name: 'Tênis Balmain',
  //     price: '337,00',
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //   },
  // ]



  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="md:w-[90%]  h-[500px]"
      >

        {
          bestProduct &&
          bestProduct.map((best, i) => (
            <SwiperSlide key={i} className='flex items-center justify-center'>
              <div
                onClick={() => handleClickDetails(best._id)}
                className='flex w-[100%] h-[300px] flex-col rounded-lg border-4 cursor-pointer hover:border-blue-500 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={best.url[0]} alt="" />
                <div className='flex p-4 flex-col w-full max-h[150px] bg-primary'>
                  <div className="flex items-center justify-between">
                    <span className="text-segundary text-xl"> R$ {best.price}</span>
                    <div className="flex gap-1">
                      <img width={15} src={star} alt="" />
                      <img width={15} src={star} alt="" />
                      <img width={15} src={star} alt="" />
                      <img width={15} src={rating} alt="" />
                    </div>
                  </div>
                  <small className="text-button-action text-lg">10x de {parseFloat(best.price) / 10}0</small>
                  <span className="text-2xl font-bold mb-2">{best.name}</span>
                  <p className="text-gray-700">{best.description}</p>
                </div>
              </div>
            </SwiperSlide>

          ))
        }
      </Swiper>
    </>
  );
}
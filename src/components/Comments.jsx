import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { BsStarHalf, BsStarFill } from 'react-icons/bs'


const comments = [
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 5,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 3,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 5,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 3,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 5,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 3,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 5,
  },
  {
    name: 'Ronualdo santos',
    email: 'ronualdo@hotmail.com',
    content: 'Muito bom, chegou dentro do prazo, tênis muito confortavel',
    img: 'https://m.media-amazon.com/images/I/61kQK0LdqiL._SY256.jpg',
    star: 3,
  },
]

export function Star({ star }) {
  return (
    <div className="flex w-fit gap-3 h-[40px]">
      {
        star >= 4 ? (
          <div className="flex gap-1 ">
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarHalf size={20} color='#3FADFF' />
          </div>

        ) : (
          <div className="flex gap-1">
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarFill size={20} color='#3FADFF' />
            <BsStarHalf size={20} color='#3FADFF' />
          </div>
        )
      }
    </div>
  )
}


export default function Comments() {

  return (
    <div className="md:w-[90%] h-[300px] mt-20 mb-[200px]">
      <h1 className="text-4xl text-center w-full mb-8">Avaliação dos clientes</h1>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" md:w-[50%] h-full p-5"
      >
        {
          comments && comments.map((com, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="flex flex-col bg-gray-200 py-10 p-4 rounded-lg items-center justify-center w-[70%]">
                <h1 className="text-xl font-bold">{com.name}</h1>
                <span className="mb-3">{com.email}</span>
                <Star star={com.star} />
                <p className="text-center">
                  {com.content}
                </p>
                <div className="flex mt-2 gap-2">
                  <img className="w-[70px] h-[70px] hover:border-primary border-2 transition-all rounded-md object-cover" src={com.img} alt="" />
                  <img className="w-[70px] h-[70px] hover:border-primary border-2 transition-all rounded-md object-cover" src={com.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

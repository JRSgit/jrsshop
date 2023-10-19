import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Loadding from '../components/Loadding'

import { bestSellProduct } from '../services/api'




import { productForCategoryName, indexCategoryName } from '../services/api'

import bg from '../assets/bg.jpg'
import bgHugo from '../assets/bg-hugo.png'
import bgTime from '../assets/bg-time.png'
import bgTenis from '../assets/bg-tenis.png'

import { products } from '../data/products'
import FeedBack from '../components/FeedBack'
import { Swipers } from '../components/ProductRelation'

function ProductForCategory() {
  const { nameCategory } = useParams()
  const navigate = useNavigate()

  // const [products, setProducts] = useState(null)
  // const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [bestSell, setBestSell] = useState()

  useEffect(() => {
    const request = async () => {
      // const res = await bestSellProduct()
      // return setBestSell(res.data)
      setBestSell(products)
    }
    request()
  }, [])

  // useEffect(() => {
  //   const request = async () => {
  //     setLoading(true)
  //     try {
  //       const res = await productForCategoryName(nameCategory)
  //       setProducts(res.data)
  //       setLoading(false)
  //     } catch (error) {
  //       setLoading(true)
  //       toast("Error ao buscar produtos dessa categoria", { theme: 'dark' })
  //       setTimeout(() => {
  //         navigate.back()
  //         setLoading(false)
  //       }, 2000)
  //     }
  //   }
  //   request()
  // }, [nameCategory, navigate])

  // useEffect(() => {
  //   const req = async () => {
  //     if (nameCategory) {
  //       const res = await indexCategoryName(nameCategory)
  //       setCategory(res.data)
  //     } else {
  //       toast('Categoria sem nome')
  //     }
  //   }
  //   req()
  // }, [nameCategory])

  const handleClickProduct = async (id) => {
    console.log(id)
  }

  return (
    <div className='w-full h-full'>
      <Header />
      {
        loading ? (
          <Loadding />

        ) : (
          <>
            {
              // category &&
              // <div className='w-full h-[400px] relative'>
              //   <div className='absolute top-[35%] leading-4 ml-[40%]'>
              //     <h1 className='capitalize text-8xl font-bold text-white'>{category[0].title}</h1>

              //   </div>
              //   <img className='w-full h-full object-cover' src={category[0].imagem} alt="" />
              // </div>

            }
            {
              // products && (
              <div className={`flex flex-col w-full h-full  bg-[#ededed] justify-center items-center`}>

                <div className='bg-white mt-10 rounded-md wfull mx-[6%] h-full flex flex-col justify-center pt-10 flex-wrap gap-2'>
                  <h1 className='text-3xl border-b mb-6 font-light ml-3'>Produtos da Categoria {nameCategory}</h1>
                  <div className='flex flex-wrap justify-center gap-3'>
                    {
                      products.map((prod, i) => (
                        i < 10 && (
                          <div key={prod._id}
                            onClick={() => handleClickProduct(prod._id)}
                            className='hover:border-blue-500 shadow-md p-1 rounded-md transition-all border border-transparent hover:scale-110 hover:cursor-pointer mb-10'>
                            <img className='w-[200px] h-[200px] object-cover rounded-md ' src={prod.url[0]} alt="" />
                            <div>
                              <h1 className='font-bold text-xl'>{prod.title}</h1>
                              <p className='text-orange-500 text-2xl font-semibold'>R$ {prod.price.toFixed(2)}</p>
                              {
                                prod.bestSell &&
                                <p className='px-2 text-white py-1 bg-green-400 w-fit rounded-md'>{prod.bestSell ? "Best Sell" : ''}</p>
                              }
                              {
                                prod.off > 0 &&
                                <p className='text-red-500'>Desconto de {prod.off}%</p>
                              }
                            </div>
                          </div>)
                      ))
                    }
                  </div>
                </div>

                <div className='w-full h-[480px] shadow-lg mb-20 relative mt-10 '>
                  <img className='  w-full h-full object-cover' src={bg} alt="" />

                  <div className='absolute top-10 ml-[8%] w-[300px] h-[300px]'>
                    <h1 className='text-center text-white text-5xl'>Camisas Sport</h1>
                    <img src={bgHugo} alt="" className='w-full h-full shadow-lg object-cover' />
                  </div>
                  <div className='absolute top-10 ml-[40%] w-[300px] h-[300px]'>
                    <h1 className='text-center text-white text-5xl'>Tênis Sport</h1>
                    <img src={bgTenis} alt="" className='w-full h-full shadow-lg object-cover' />
                  </div>
                  <div className='absolute top-10 ml-[70%] w-[300px] h-[300px]'>
                    <h1 className='text-center text-white text-5xl'>Tênis Sport</h1>
                    <img src={bgTime} alt="" className='w-full h-full shadow-lg object-cover' />
                  </div>
                  <h1 className='absolute top-[180px] ml-[25%] text-[220px] text-white font-bold'>Premium</h1>
                </div>

                <div className='bg-white mt-10 mb-20 rounded-md border-2 w-full h-full flex flex-col justify-center pt-10 flex-wrap gap-2'>
                  <h1 className='text-3xl border-b mb-6 font-light ml-3'>Produtos da Categoria {nameCategory}</h1>
                  <div className='flex flex-wrap justify-center gap-3'>
                    {
                      products.map((prod, i) => (
                        i > 10 && (
                          <div key={prod._id}
                            onClick={() => handleClickProduct(prod._id)}
                            className='hover:border-blue-500 shadow-md p-1 rounded-md transition-all border border-transparent hover:scale-110 hover:cursor-pointer mb-10'>
                            <img className='w-[200px] h-[200px] object-cover rounded-md ' src={prod.url[0]} alt="" />
                            <div>
                              <h1 className='font-bold text-xl'>{prod.title}</h1>
                              <p className='text-orange-500 text-2xl font-semibold'>R$ {prod.price.toFixed(2)}</p>
                              {
                                prod.bestSell &&
                                <p className='px-2 text-white py-1 bg-green-400 w-fit rounded-md'>{prod.bestSell ? "Best Sell" : ''}</p>
                              }
                              {
                                prod.off > 0 &&
                                <p className='text-red-500'>Desconto de {prod.off}%</p>
                              }
                            </div>
                          </div>)
                      ))
                    }
                  </div>
                </div>
                {/* Opiniões */}
                <FeedBack />
                {/* Product Patrocinadado... */}
                <div className='p-4 mb-20 w-[90%] rounded-xl flex flex-col bg-white items-center justify-center '>
                  <h1 className='text-3xl font-light text-start w-full'>Produtos Patrocinados</h1>
                  <Swipers products={bestSell} />
                </div>

                <div className='w-full h-[400px] mt-10 mb-10'>
                  <img
                    className='w-full h-full object-cover'
                    src="https://as1.ftcdn.net/v2/jpg/06/06/67/90/1000_F_606679092_VyJkteHSHH12jzdcJJLDQOn4d9Js9wqX.jpg" alt="" />
                </div>
              </div>
              //)
            }
          </>
        )
      }
      <Footer />
    </div>
  )
}

export default ProductForCategory
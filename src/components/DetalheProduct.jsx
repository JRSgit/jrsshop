import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux"

import Comments from "./Comments"
import Footer from "./Footer"
import Header from "./Header"

import { addToList } from "../reducer/ListSlice"

import { FaArrowRight } from 'react-icons/fa'
import Loadding from "./Loadding"

import star from '../assets/star.png'
import rating from '../assets/rating.png'

import { indexOneProduct, indexProductRelation } from "../services/api"
import { Swipers } from './ProductRelation'
// import ProductRelation from "./ProductRelation"
import BestSell from "./BestSell"
import SugestionTop from "./SugestionTop"


const avaliable = Math.ceil(Math.random() * 10 + 100)

function DetalheProduct() {
  const { id } = useParams()
  const dispatch = useDispatch()
  //const { listItems, listQuantity, listAmount } = useSelector(state => state.list)

  const [productRelat, setProductRelat] = useState(null)
  const [changeImg, setChangeImg] = useState(0)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [size, setSize] = useState()
  const [cor, setCor] = useState()

  const promo = product && (product.price - (product.off / 100) * (product.price))

  useEffect(() => {
    const request = async () => {
      try {
        const resp = await indexProductRelation(product?.category)
        setProductRelat(resp.data)
      } catch (error) {
        toast('Error ao buscar produtos relacionados!')
      }
    }
    request()
  }, [product?.category])
  // =======================================
  useEffect(() => {
    const request = async () => {
      setLoading(true)
      try {
        const resp = await indexOneProduct(id)
        setProduct(resp.data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    request()
  }, [id])
  //  =======================================
  const handleAddList = (prod) => {
    if (!size || !cor) {
      toast("Selecione um cor e um tamanho.")
      return
    }
    const ProdSend = {
      id: prod._id,
      title: prod.title,
      price: prod.price,
      content: prod.content,
      countInStock: prod.countInStock,
      off: prod.off,
      url: prod.url,
      color: [cor],
      size: [size]

    }

    dispatch(addToList(ProdSend))


  }

  const handleClickImg = (i) => {
    setChangeImg(i)
  }


  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header />
      <div className=" w-full h-full md:px-8">
        {
          loading ? (
            <Loadding />
          ) : (

            product && (
              <>
                <SugestionTop />
                <div className="flex gap-2 items-center justify-start h-[40px] py-2 mt-12 ml-2 md:ml-0">
                  <Link to='/products' className="text-sm" >Voltar</Link>
                  <div className="w-[1px] bg-gray-400 h-full" />
                  <Link to={`/productsForCategory/${product.category}`}>{product.category}</Link>
                </div>
                {/* ================= */}
                <div className="md:flex grid grid-cols-1 w-full h-full mt-2 bg-white rounded-md shadow-2xl">
                  <div className=" h-full md:w-[65%]  md:flex-row-reverse  md:flex gap-3 p-4 ">
                    <div className="w-full h-[60%] relative ">
                      {
                        product.off > 0 && (<div className='absolute w-28 text-center top-4 left-2 rounded-xl text-white md:text-xl rotate-12 md:p-4 bg-button-action'>{product.off}% off</div>)
                      }
                      {
                        product.url && <img className="w-full border transition-all rounded-lg max-h-[500px] object-cover " src={product.url[changeImg]} alt="" />

                      }
                    </div>
                  </div>
                  <div className="flex md:flex-col w-full max-h-[500px] gap-3 h-fit justify-start md:overflow-y-auto overflow-x-auto p-4">
                    {product.url && product.url.map((im, i) => (
                      <img
                        key={i}
                        src={im}
                        onClick={() => handleClickImg(i)}
                        className="md:w-full w-[100px] hover:cursor-pointer hover:border-blue-400 border transition-all rounded-lg max-h-[200px] object-cover " />))}
                  </div>


                  <div className="grid grid-cols-1 md:flex md:w-[30%] h-full mt-4 bg-white p-4 rounded-lg">
                    <h1 className="md:text-2xl text-4xl font-bold mb-2">{product.title}</h1>
                    {/* <div className="flex items-center justify-between mb-2">
                      <span className={`p-2 capitalize rounded-lg text-gray-400 ${product.category?.color}`}>{product.category ? product.category : ''}</span>
                      <span>SKU:</span>
                    </div> */}

                    <div className="mb-10">
                      <div className="flex items-center gap-3 bg-gray-300 justify-between p-2">
                        <div>
                          <strong>Tamanho: </strong>
                          <select
                            className="px-2 p-1 rounded-md"
                            name="tamanho" id="tamanho"
                            onChange={(e) => setSize(e.target.value)}
                          >
                            <option value="">Selec.</option>
                            {
                              product.size.map((si, i) => (
                                <option key={i} value={si}>{si}</option>

                              ))
                            }

                          </select>
                        </div>

                        <div className="flex gap-3">
                          <strong>Cor:</strong>
                          <select
                            onChange={(e) => setCor(e.target.value)}
                            className="px-2 p-1 rounded-md" name="cor" id="cor">
                            <option value="">Selec.</option>
                            {
                              product.color.map((c, i) => (
                                <option key={i} value={c}>{c}</option>

                              ))
                            }
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-10 border-b border-b-gray-400">
                      <h1 className="text-2xl font-bold ml-3">4.7</h1>
                      <div>
                        <div className="flex gap-1">
                          <img width={20} src={star} alt="" />
                          <img width={20} src={star} alt="" />
                          <img width={20} src={star} alt="" />
                          <img width={20} src={star} alt="" />
                          <img width={20} src={rating} alt="" />
                        </div>
                        <span>{avaliable} avaliações</span>
                      </div>

                    </div>
                    {
                      product.off > 0 ? (
                        <div className="flex justify-between items-center">
                          <div>
                            <h1 className="text-jg font-bold  text-gray-400 line-through">R$ {product.price.toFixed(2)}</h1>
                            <h3 className="text-md font-semibold underline text-gray-400">10x de {(product.price / 10).toFixed(2)}</h3>
                          </div>
                          <FaArrowRight size={40} className="text-red-500" />
                          <div>
                            <h1 className="text-3xl font-bold">R$ {promo.toFixed(2)}</h1>
                            <h3 className="text-md  ml-4 font-semibold">10x de {(promo / 10).toFixed(2)}</h3>
                          </div>

                        </div>

                      ) : (
                        <div className="flex justify-between">
                          <div>
                            <h1 className="text-2xl font-bold underline text-gray-400">R$ {product.price.toFixed(2)}</h1>
                            <h3 className="text-md font-semibold underline text-gray-400">10x de {(product.price / 10).toFixed(2)}</h3>
                          </div>
                        </div>
                      )
                    }
                    <button
                      onClick={() => handleAddList(product)}
                      className="py-4 mt-3 hover:bg-orange-600 transition-all rounded-lg  text-white text-3xl text-bold px-4 bg-button-action">
                      Adicionar a Lista
                    </button>

                    <div className="w-full mt-4 mb-2">
                      <strong>Descrição</strong>
                      <p className="text-sm ">
                        {product.content}
                      </p>

                    </div>

                  </div>

                </div>
              </>
            )
          )
        }
        <div className="flex flex-col mt-10 mb-10">
          <h1 className='text-black font-light ml-5 text-2xl mt-2 text-start'>
            Quem viu este produto também comprou
          </h1>
          <div className="md:flex grid grid-cols-1">
            <Swipers products={productRelat} />
            {/* <ProductRelation /> */}
          </div>
        </div>

        <h1 className="text-4xl ml-4 md:ml-0">Mais Vendidos</h1>
        <hr className="w-[90%] bg-gray-500 h-[2px]" />
        <BestSell />

        <Comments />

      </div>

      <Footer />

    </div>
  )
}

export default DetalheProduct
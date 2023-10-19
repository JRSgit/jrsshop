import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  deleteOneProduct,
  indexAllProducts,
  indexOneProduct,
  updateOneProduct
} from '../services/api'
import { Edit2, Trash2 } from 'lucide-react'
import { FaCheck } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

function Products() {
  const [productList, setProductList] = useState([])
  const [productOne, setProductOne] = useState(null)
  const [editProduct, setEditProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [edit, setEdit] = useState(false)

  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [content, setContent] = useState('')
  const [price, setPrice] = useState(0)
  const [bestSell, setBestSell] = useState(false)


  useEffect(() => {
    setLoading(true)
    const requestProduct = async () => {
      const resp = await indexAllProducts()
      setProductList(resp.data)
      setLoading(false)
    }
    requestProduct()
  }, [edit])

  const handleProductOne = async (id) => {
    try {
      setEdit(false)
      setTitle('')
      setContent('')
      setPrice('')
      const resp = await indexOneProduct(id)
      setProductOne(resp.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteOneProduct(id)
      toast("Produto deletado com Sucesso")
    } catch (error) {
      console.log(error.message)
      toast('Error ao deletar o produto')
    }
  }

  const handleEditProduct = async (id) => {
    setLoading(true)
    try {
      const resp = await indexOneProduct(id)
      setEditProduct(resp.data)
      setTimeout(() => {
        setEdit(true)
        setLoading(false)
      }, 1000)

      setProductOne(null)

    } catch (error) {
      toast('Error ao buscar o Produto')
      console.log(error.message)
    }
  }

  useEffect(() => {
    setTitle(editProduct?.title)
    setContent(editProduct?.content)
    setPrice(editProduct?.price)
    setBestSell(editProduct?.bestSell)
    setSize('')
    setColor('')

  }, [editProduct])

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const data = {
      content,
      bestSell,
      title,
      price,
      color,
      size
    }

    const id = editProduct._id
    try {
      const resp = await updateOneProduct(id, data)
      if (resp.status == 200) {
        toast("Produto atualizado com sucesso")
        setEdit(false)
      }
      setLoading(false)
      setBestSell(false)
      setColor('')
      setSize('')

    } catch (error) {
      console.log(error);
      toast('Produto não atualizado')
    }

  }

  const handleCancelEdit = () => {
    setEdit(false)
  }


  return (
    <div className='flex flex-col mt-10 bg-gray-400 rounded-md p-4 w-[70%] h-[700px] mx-auto my-auto  items-center'>
      <h1 className='text-white font-light text-2xl'>Todos os Produtos Cadastrados</h1>
      {
        loading ? (
          <div className='flex mt-20 gap-2 w-full items-center justify-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-green-600 animate-ping'></div>
            <div className='w-[20px] h-[20px] rounded-full bg-red-600 animate-ping'></div>
            <div className='w-[20px] h-[20px] rounded-full bg-blue-600 animate-ping'></div>
          </div>
        ) : (
          <div className='flex gap-8 mt-10 h-full items-start justify-center w-full'>

            <div className='h-full flex flex-col flex-1'>
              <h1 className='text-center text-2xl text-white mb-3'>Produtos</h1>
              <ul className=' rounded-md flex- flex-col overflow-scroll shadow-lg h-[80%] py-10 px-6 bg-white'>
                {
                  productList && productList.map((product) => (
                    <li
                      key={product._id}
                      onClick={() => handleProductOne(product._id)}
                      className=" cursor-pointer flex mb-8 hover:bg-gray-300 transition-all p-2 rounded-md items-center justify-between border-b-2 ">
                      <h1>{product.title}</h1>
                      <span className='text-red-500 ml-2'>R$ {product.price.toFixed(2)}</span>

                    </li>
                  ))
                }
              </ul>

            </div>

            {
              productOne && (
                <div className='flex flex-col flex-1 justify-start items-center'>
                  <div className='flex flex-wrap gap-2 w-full items-center justify-center '>
                    {
                      productOne.url.map((im, i) => (
                        <img key={i} src={im} className="w-[30%] max-h-[80px] object-cover" />)
                      )
                    }

                  </div>
                  <h1 className='text-2xl font-bold mt-3'>{productOne.title}</h1>
                  <div className='flex w-full justify-between p-2 '>
                    <span className='text-red-500 text-2xl '>R$: {productOne.price.toFixed(2)}</span>
                    {productOne.category && <span className={`text-blue-500 p-2 ${productOne.category.color} rounded-md`}>
                      {productOne.category.title}
                    </span>
                    }
                  </div>
                  <div className='h-[350px] px-4 overflow-scroll'>
                    <div className='border-b-2 w-full mb-4 p-2'>
                      <h1 className='text-white text-xl mb-2'>Cores:</h1>
                      {
                        productOne.color.map((cor, i) => <span className='ml-3 p-2 bg-red-400 rounded-md' key={i}>{cor}</span>)
                      }
                    </div>
                    <div className='border-b-2 w-full mb-4 p-2'>
                      <h1 className='text-white text-xl mb-2'>Tamanhos:</h1>
                      {
                        productOne.size.map((siz, i) => <span className='ml-3 p-2 bg-red-400 rounded-md' key={i}>{siz}</span>)
                      }
                    </div>
                    <span className='text-xl text-white'>Descrição:</span>
                    <p className='text-justify p-3 bg-gray-200 rounded-md indent-8'>
                      {productOne.content}

                    </p>

                    <div className='flex gap-3 mt-10 justify-center mb-3'>
                      <Edit2
                        size={50}
                        color='orange'
                        onClick={() => handleEditProduct(productOne._id)}
                        className='p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-white transition-all' />
                      <Trash2
                        size={50}
                        color='red'
                        onClick={() => handleDeleteProduct(productOne._id)}
                        className='p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-white transition-all' />
                    </div>
                  </div>
                </div>
              )
            }
            {
              edit && (
                <div className='flex flex-1 flex-col p-2 rounded-md bg-blue-500 items-center justify-center'>
                  <h1 className='text-white text-2xl'>Edite o Produto</h1>

                  <div className='flex mt-2 mb-2 gap-2'>
                    {
                      editProduct.url.map((u, i) => (
                        <img key={i} src={u} className='w-[100px] rounded-md shadow-md' />
                      ))

                    }
                  </div>


                  <form
                    className='flex w-full flex-col items-center justify-center'>

                    <div className='flex p-2 w-full gap-2 items-center'>
                      <span>Title</span>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full p-2 rounded-md outline-none border-none'
                        type="text" name='title' value={title} />
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex flex-col p-2 w-full gap-1 items-center'>
                        <span>Cor</span>
                        <input
                          onChange={(e) => setColor(e.target.value)}
                          value={color}
                          placeholder="Digite as Cores"
                          className='w-full p-2 rounded-md outline-none border-none'
                          type="text" name='color' />
                      </div>
                      <div className='flex flex-col p-2 w-full gap-1 items-center'>
                        <span>Tamanho</span>
                        <input
                          onChange={(e) => setSize(e.target.value)}
                          placeholder="Digite os Tamanhos"
                          value={size}
                          className='w-full p-2 rounded-md outline-none border-none'
                          type="text" name='size' />
                      </div>
                      <div className='flex flex-col p-2 w-full gap-1 items-center'>
                        <span>Preço R$</span>
                        <input
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}
                          className='w-full p-2 rounded-md outline-none border-none'
                          type="number" name='price' />
                      </div>

                    </div>
                    <div >
                      <button
                        onClick={() => setBestSell(!bestSell)}
                        type="button"
                        className='flex items-center gap-2 p-2 mt-3 rounded-md bg-gray-200 text-green-700 font-bold'>
                        {
                          bestSell ? 'Best Sell' : ' No Best Sell'
                        }
                        {
                          bestSell ? (
                            <FaCheck className='p-2 rounded-md bg-green-500' size={30} color="white" />
                          ) : (
                            <MdClose className='p-2 rounded-md bg-red-500' size={35} color="white" />
                          )
                        }
                      </button>

                    </div>
                    <div className='w-full p-4'>
                      <span>Descrição</span>
                      <textarea
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        className='w-full p-2 indent-8 rounded-md'
                        name="content" id="content" cols="10" rows="5">
                        {editProduct?.content}
                      </textarea>
                    </div>
                    <div className='flex gap-3'>

                      <button
                        onClick={(e) => onSubmit(e)}
                        className='mb-10 text-2xl text-blue-600 px-4 py-2 rounded-md  cursor-pointer transition-all hover:bg-white bg-gray-300'
                        type="submit"
                      >Salvar</button>
                      <button
                        onClick={() => handleCancelEdit()}
                        className='p-2 bg-red-500 text-white mb-10 rounded-md hover:bg-red-600 transition-all'
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )
            }
          </div>
        )
      }

    </div>
  )
}

export default Products
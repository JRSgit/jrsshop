import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { indexAllProducts } from '../services/api'
import look from '../assets/look.mp4'


function Products() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const request = async () => {
      const resp = await indexAllProducts()
      setProducts(resp.data)
    }
    request()
  }, [])

  const handleClickDetails = (key) => {
    navigate.push('/details', { key })
  }

  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
      <Header />

      <h1 className='font-light text-4xl w-full ml-10 mt-20 mb-4'>Todos os Produtos</h1>
      <div className='flex w-full h-full gap-3 flex-wrap items-center justify-center'>
        {
          products && products.map((product, i) => (
            i < 12 && (
              <div key={i} className='w-[300px]'>
                <Card
                  onclick={() => handleClickDetails(product)}
                  id={product._id}
                  n={i}
                  off={product.off}
                  name={product.title}
                  price={product.price}
                  description={product.content}
                  img={product.url[0]}
                />
              </div>
            )
          ))
        }
        <div
          className='w-[90%] rounded-xl bg-[rgba(0,0,0,0.4)] mb-20 mt-20 py-8 h-[500px] flex flex-col items-center justify-center'>
          <h1 className='w-full text-4xl font-light mb-4 text-center'>Vista-se</h1>
          <video className=' rounded-md h-full object-contain' src={look} autoPlay muted loop />
        </div>
        {
          products && products.map((product, i) => (
            i > 12 && (
              <div key={i} className='w-[300px]'>
                <Card
                  onclick={() => handleClickDetails(product)}
                  id={product._id}
                  n={i}
                  off={product.off}
                  name={product.title}
                  price={product.price}
                  description={product.content}
                  img={product.url[0]}
                />
              </div>
            )
          ))
        }
      </div>
      <Footer />

    </div>
  )
}

export default Products
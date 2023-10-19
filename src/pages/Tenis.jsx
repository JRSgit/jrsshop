import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import Img from '../assets/logo.png'
import Joelho from '../assets/joelho.jpg'
import Card from '../components/Card'
import Header from '../components/Header'
import Banners from '../components/Banners'
import { indexProductsCategory, indexCategory, indexAllProducts, bestSellProduct } from '../services/api'
import { useGetAllProductsQuery } from '../reducer/productsApi'
import Loadding from '../components/Loadding'
import Promo, { BannerPromo, Beneficio } from '../components/Promo'
import Footer from '../components/Footer'



function Tenis() {
  const navigate = useNavigate()

  const { data, error, isLoading } = useGetAllProductsQuery()

  const [categories, setCategories] = useState(null)
  const [products, setProducts] = useState(null)
  const [bestProduct, setBestProduct] = useState(null)

  // const products = [
  //   {
  //     name: 'Tênis Balmain',
  //     price: '337,00',
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',

  //   },
  //   {
  //     name: 'Nike Shox',
  //     price: '387,00',
  //     description: 'Tenis de corrida styleShift',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2022/05/nike-shox-nz-atacado-4.jpg?fit=2880%2C1456',

  //   },
  //   {
  //     name: 'Nike Shox',
  //     price: '387,00',
  //     description: 'Tenis de corrida styleShift',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2022/05/nike-shox-nz-atacado-4.jpg?fit=2880%2C1456',

  //   },
  //   {
  //     name: 'Nike Shox',
  //     price: '387,00',
  //     description: 'Tenis de corrida styleShift',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2022/05/nike-shox-nz-atacado-4.jpg?fit=2880%2C1456',

  //   },

  // ]

  const handleClickDetails = (id) => {
    navigate.push('/details', { id })
  }

  const handleClickCategory = async (id) => {
    const resp = await indexProductsCategory(id)
    console.log(resp)
  }

  useEffect(() => {
    const findCategory = async () => {
      try {
        const resp = await indexCategory()
        setCategories(resp.data)

      } catch (error) {
        console.log(error)
      }
    }
    findCategory()
  }, [])

  useEffect(() => {
    const findProducts = async () => {
      try {
        const resp = await indexAllProducts()
        setProducts(resp.data)
        const bestSell = await bestSellProduct()
        setBestProduct(bestSell.data)
      } catch (error) {
        console.log(error)
      }
    }
    findProducts()
  }, [])


  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <Banners />

      {
        isLoading ? (
          <div className='w-full flex items-center justify-center'>
            <Loadding />
          </div>
        ) : (
          <>
            {/* Category */}
            {
              categories && (

                <div className='flex flex-wrap gap-4 w-full items-center mb-10 justify-center px-8'>
                  {categories.map((category) => (
                    <div
                      key={category._id}
                      onClick={() => handleClickCategory('649af0ef5860e0950573ec9a')}
                      className='cursor-pointer flex flex-col gap-2 items-center justify-center hover:scale-110 transition-all'>
                      <img
                        className='md:w-[150px] w-[80px] h-[80px] overflow-hidden md:h-[150px] shadow-xl object-cover rounded-full'
                        src={category.imagem ? category.imagem : "https://wallpapercave.com/wp/wp3130193.jpg"} alt=""
                      />
                      <h1 className='capitalize md:text-3xl text-xl font-bold'>{category.title}</h1>
                    </div>

                  ))}
                </div>
              )
            }
            {/* Produtcs */}
            <section className='grid grid-cols-1 w-full h-fit mt-5 md:p-10'>
              <h1 className='w-full font-light md:text-4xl text-4xl text-center  mt-10 '>
                Em alta
              </h1>
              <div className='flex flex-col w-full h-full md:p-10  p-2 rounded-md'>
                <div className='grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-2 w-full h-full'>
                  {
                    data && (
                      data.map((pro, i) => (
                        i < 6 &&
                        <Card
                          onclick={() => handleClickDetails(pro._id)}
                          id={pro._id}
                          key={i}
                          n={i}
                          name={pro.title}
                          price={pro.price}
                          description={pro.content}
                          img={pro.url[0]}
                        />

                      ))

                    )
                  }

                </div>
              </div>
              {/* <div className='flex flex-col w-full h-96 p-10'>
        <div className='flex gap-5 w-full h-full'>
          {
            products && (
              products.map((pro, i) => (
                <Card
                  key={i}
                  name={pro.title}
                  price={pro.price}
                  description={pro.content}
                  img={pro.url[0]}
                />

              ))

            )
          }
        </div>
      </div> */}
            </section>

            {/* Banner */}
            <div className='grid md:grid-cols-3 grid-cols-1 relative items-center gap-5 justify-between w-full min-h-[400px] mb-20 bg-bg-tenis bg-cover bg-center bg-no-repeat'>
              <div className='w-full h-full z-10 absolute top-0 right-0 bg-[rgba(0,0,0,0.9)]'></div>
              <h1 className='text-[#3BA6FF] z-20 md:text-6xl text-center w-full text-3xl mt-3  md:w-[50%] md:ml-5'>
                Um tênis faz diferência
              </h1>
              <img className='z-20' width={600} src={Joelho} alt="" />
              <div className='z-20 ml-4'>
                <h2 className='text-white text-3xl md:text-4xl text-center'>O uso tênis evita:</h2>
                <ul className='flex flex-col items-center p-2 md:text-2xl gap-2 list-disc text-white '>
                  <li>Desgaste osseos.</li>
                  <li>Lesões.</li>
                  <li>Artrite ossea.</li>
                  <li>Distenção muscular.</li>
                  <li>Consultas Médicas e exames.</li>
                </ul>
              </div>
            </div>

            {/* 2 Card Products */}
            <section className='grid grid-cols-1 w-full h-fit mt-5 md:p-10'>
              <h1 className='w-full font-light md:text-4xl text-2xl text-center  mt-10 '>
                Selecionados para você em calçados, Roupas e Bolsas.
              </h1>
              <div className='flex flex-col w-full h-full md:p-10  p-2 rounded-md'>
                <div className='grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-2 w-full h-full'>
                  {
                    data && (
                      data.map((pro, i) => (
                        i > 6 && i < 15 &&
                        <Card
                          onclick={() => handleClickDetails(pro._id)}
                          id={pro._id}
                          key={i}
                          n={i}
                          name={pro.title}
                          price={pro.price}
                          description={pro.content}
                          img={pro.url[0]}
                        />

                      ))

                    )
                  }

                </div>
              </div>
            </section>

            {/* Best Sells */}
            <section className='flex flex-col w-full mb-20 mt-20'>
              <div className='w-full h-full items-center bg-white p-4'>
                <h1 className='text-4xl mb-10 font-light'>Mais Vendidos</h1>
                <div className=' w-full px-4 items-center justify-center h-full flex  gap-5'>
                  {
                    bestProduct && (
                      bestProduct.map((pro, i) => (
                        <Card
                          key={i}
                          id={pro._id}
                          name={pro.title}
                          price={pro.price}
                          description={pro.content}
                          img={pro.url[1]}
                        />

                      ))

                    )
                  }
                </div>
              </div>
            </section>

            {/* Video */}
            <section className='w-full'>
              <div>

              </div>
            </section>
            {/* Times */}
            <Promo />
            {/* Beneficios */}
            <Beneficio />
            {/* Banner Promo */}
            <BannerPromo />

            <Footer />
          </>
        )
      }


    </div>
  )
}

export default Tenis


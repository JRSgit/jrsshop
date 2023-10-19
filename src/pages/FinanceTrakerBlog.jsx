import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArticleCard from '../components/blog/ArticleCard';
import { articles } from '../data/articles';



export function Header() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const [menuShow, setMenuShow] = useState(false)

  useEffect(() => {
    window.innerWidth <= 736 ? setMenu(true) : setMenu(false)
  }, [])

  const handleMenuShow = () => {
    setMenuShow(!menuShow)
  }

  return (
    <header className={`bg-blue-500 text-white p-4 flex justify-between`}>
      <h1
        onClick={() => navigate('/finance')}
        className="text-2xl font-bold hover:cursor-pointer">Finance Blog</h1>

      {
        menu ? (
          <div
            onClick={() => handleMenuShow(!menuShow)}
            className='flex flex-col gap-1 w-fit h-fit hover:cursor-pointer md:max-w-none'>
            <div className='min-w-[35px] min-h-[3px] bg-white rounded-md' />
            <div className='min-w-[35px] min-h-[3px] bg-white rounded-md' />
            <div className='min-w-[35px] min-h-[3px] bg-white rounded-md' />
            <div className='min-w-[35px] min-h-[3px] bg-white rounded-md' />
          </div>
        ) : (
          <ul className='flex gap-3 '>
            <li className='hover:border-b-2'>
              <Link to="/">Finanças</Link>
            </li>
            <li className='hover:border-b-2'>
              <Link to="/">Emocional</Link>
            </li>
            <li className='hover:border-b-2'>
              <Link to="/">Vendas</Link>
            </li>
            <li className='hover:border-b-2'>
              <Link to="/">Merc.Financeiro</Link>
            </li>
          </ul>
        )
      }
      {
        menuShow &&

        <div className='absolute  top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center justify-center'>
          <button
            onClick={() => handleMenuShow(!menuShow)}
            className='absolute top-2 right-3 text-2xl text-black w-10 h-10 bg-gray-400 rounded-full hover:bg-slate-100'>X</button>
          <div className='flex items-center justify-center'>
            <ul className='flex gap-3  flex-col items-center justify-center'>
              <li className='hover:bg-gray-200 hover:text-black transition-all px-4 py-2 rounded-md focus:border-b-2'>
                <Link to="/">Finanças</Link>
              </li>
              <li className='hover:bg-gray-200 hover:text-black transition-all px-4 py-2 rounded-md focus:border-b-2'>
                <Link to="/">Emocional</Link>
              </li>
              <li className='hover:bg-gray-200 hover:text-black transition-all px-4 py-2 rounded-md focus:border-b-2'>
                <Link to="/">Vendas</Link>
              </li>
              <li className='hover:bg-gray-200 hover:text-black transition-all px-4 py-2 rounded-md focus:border-b-2'>
                <Link to="/">Merc.Financeiro</Link>
              </li>
            </ul>

          </div>
        </div>
      }

    </header>
  );
}

export function Banner() {
  return (
    <div className='w-full h-[350px] bg-gradient-to-r bg-blue-600 flex flex-col items-center justify-start'>
      <h1 className='text-5xl font-bold text-white mt-5'>Blog Finance Traker</h1>
      <p className='text-white text-xl indent-6 font-light w-[50%] p-4 mb-3'>
        Junte-se a milhares de pessoas que buscam superar
        suas dificudades financeiras e acelere na direção dos seus objetivos.
      </p>
      <Link
        className='px-6 py-2 bg-gray-100 rounded-md outline-none border-none shadow-md hover:bg-gray-300 transition-all'
        to="newsletter">
        Inscreva-se em nossa newsletter
      </Link>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; 2023 Finance Blog. All rights reserved.</p>
    </footer>
  );
}




function Home() {
  const navigate = useNavigate()

  const handleClickArticle = (id) => {
    navigate(`/article/${id}`)
  }
  return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto mt-4 p-10 rounded-md">

        <h1 className="text-3xl font-semibold mb-4">Latest Articles</h1>

        <div
          onClick={() => handleClickArticle(1)}
          className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-6 hover:cursor-pointer">
          <img src="https://plus.unsplash.com/premium_photo-1680792417523-156a3568162e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-fulll rounded-md object-cover" />
          {/* <div className='rounded-md overflow-hidden col-span-2  w-full'>
          </div> */}
          <div className='flex items-center justify-center'>
            <p className='p-10 indent-6 leading-6 text-2xl font-light text-black'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quia consequatur aspernatur eveniet veniam officiis beatae atque.
              Ab tempora perspiciatis eos, nam, facere facilis, nostrum libero
              enim eum fugiat excepturi est!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard
              onclick={() => handleClickArticle(article.id)}
              key={article.id} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

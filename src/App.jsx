import './App.css'

import Logo from './assets/logo1.png'

function App() {

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-start items-center'>
        <div className='bg-transparent text-white  w-[50%] p-2 flex flex-col items-center justify-start h-full'>
          <img className='bg-transparent' width={300} src={Logo} alt="" />

          <div className='w-full flex flex-col items-center justify-center'>
            <ul className=' w-full'>
              <li className='p-4 hover:scale-105 transition-all border-2 cursor-pointer border-blue-500 text-center rounded-lg  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  mb-6 w-full'>
                <a className='flex flex-1 item-center justify-center cursor-pointer text-4xl max-sm:text-2xl ' href="https://www.catalogodecalcados.com.br" target="_blank" rel="noopener noreferrer">
                  Sandarias Torricella
                </a>
              </li>
              <li className='p-4 hover:scale-105 transition-all border-2 cursor-pointer border-blue-500 text-center rounded-lg  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  mb-6 w-full'>
                <a className='flex flex-1 item-center justify-center cursor-pointer text-4xl max-sm:text-xl max-md:text-2xl' href="https://evgrupohinode.page.link/jjND7tXa8WgeQpsTA" target="_blank" rel="noopener noreferrer">
                  Hinode
                </a>
              </li>
              <li className='p-4 hover:scale-105 transition-all border-2  border-blue-500 text-center rounded-lg  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  mb-6 w-full'>
                <a className='flex flex-1 item-center justify-center cursor-pointer text-4xl max-sm:text-2xl' href="https://rifa321.com/rifa/ferro-de-passar-roupas-a-vapor-black-decker" target="_blank" rel="noopener noreferrer">
                  Sorteio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className='w-full text-center bg-transparent p-4'>
          <h3 className='text-white'> Copyright® todos os direitos resevado. JRShoud</h3>
        </footer>
      </div>
    </>
  )
}

export default App

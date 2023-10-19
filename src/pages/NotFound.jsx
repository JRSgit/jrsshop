import { Link } from 'react-router-dom'

import video from '../assets/andromeda.mp4'

function NotFound() {
  return (
    <div className='w-full h-screen'>
      <div className='absolute top-0 left-0 bg-tranparent z-20 w-full h-full flex flex-col items-center justify-start'>
        <h1 className='text-4xl font-bold text-white mt-10'>Pagina não encontrada</h1>
        <h3 className='text-2xl font-thin text-[#3efe]'>Voltar a Navegar em!</h3>
        <Link
          to='/tenis'
          className='text-6xl text-white font-bold mt-20 uppercase border-b-2'>
          Cefeida
        </Link>
      </div>

      <video className='w-full relative' src={video} autoPlay loop />


    </div>
  )
}

export default NotFound

import { Link } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import { FaShoppingBag, FaSellcast, FaList, FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'


function Header() {
  const { listQuantity } = useSelector(state => state.list)

  return (
    <div className='flex flex-col w-full md:relative fixed z-10'>
      <header className='w-full h-20 md:px-5  flex items-center justify-between overflow-hidden bg-[#3FADFF]'>
        <Link to='/' className=' bg-[#275e88] md:w-[100px] h-full '>
          <img className='md:w-full  h-full' src={Logo} alt="" />
        </Link>
        {/* <h1 className='text-white invisible text-3xl font-semibold'>Produtos que mudam vidas.</h1> */}
        <ul className='flex gap-4 p-3 items-center justify-center'>

          <Link to='/' className='text-black text-xl p-1 hover:border-b-2 border-b-2 transition-all cursor-pointer border-transparent hover:border-[#1283D0]'>
            <div className='flex flex-col items-center justify-center'>
              <FaHome size={30} color="#fff" />

            </div>
          </Link>
          <Link className='text-black text-xl p-1 hover:border-b-2 border-b-2 transition-all cursor-pointer border-transparent hover:border-[#1283D0]'>
            <div className='flex flex-col items-center justify-center'>
              <FaSellcast size={30} color="#fff" />

            </div>

          </Link>
          <Link to='/products' className='text-black p-1 text-xl hover:border-b-2 border-b-2 transition-all cursor-pointer border-transparent hover:border-[#1283D0]'>
            <div className='flex flex-col items-center justify-center'>
              <FaList size={30} color="#fff" />

            </div>
          </Link>
          <Link to='/list' className='ml-4 p-1 text-black text-xl hover:border-b-2 border-b-2 transition-all cursor-pointer border-transparent hover:border-[#1283D0]'>
            <div className='flex flex-col items-center justify-center relative '>
              <FaShoppingBag className='' size={35} color="#fff" />
              <small
                className='text-sm absolute flex items-center justify-center top-[-5px] right-[-13px] w-[20px] h-[20px] rounded-full text-white bg-orange-500'>
                {listQuantity}
              </small>
            </div>
          </Link>
        </ul>
      </header>
    </div>
  )
}

export default Header
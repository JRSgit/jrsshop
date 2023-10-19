import { FaShoppingBag } from 'react-icons/fa'
import { ordens } from '../data/ordens'

function RecentOrdens() {
  return (
    <div className='w-full col-span-1  lg:h-full h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Ordens Recentes</h1>
      <ul>
        {
          ordens.map((order) => (
            <li key={order.id}
              className='bg-gary-50 relative hover:bg-gray-100 rounded-lg my-3 p-2 flex item-center cursor-pointer'>
              <div className='bg-purple-100 rounded-lg p-3'>
                <FaShoppingBag className='text-purple-800' />
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>R${order.total}</p>
                <p className='text-gray-400 text-sm'>{order.name.first}</p>
              </div>
              <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default RecentOrdens
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { ordens } from '../data/ordens'

function Orders() {
  return (
    <div className='flex flex-col w-[98.5%] bg-white p-4 rounded-lg'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Ordens</h2>
        <h2>Bem vindo de volta, Ronaldo </h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4  border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-colos-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Stauts</span>
            <span className='hidden md:grid'> Ord. Anterior</span>
            <span className='hidden sm:grid'> Métodos</span>
          </div>
          <div className='h-[50vh] overflow-y-auto'>
            <ul >
              {
                ordens.map((order, id) => (
                  <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 max-sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer '>
                    <div className='flex'>
                      <div className='bg-purple-100 p-3 rounded-lg'>
                        <FaShoppingBag className='text-purple-800' />
                      </div>
                      <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>R$ {order.total.toLocaleString()}</p>
                        <p className='text-gray-800 text-sm'>{order.name.first}</p>
                      </div>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>
                      <span className={
                        order.status == 'Processing'
                          ? 'bg-green-200 p-2 rounded-lg'
                          : order.status == 'Efetive'
                            ? 'bg-blue-200 p-2 rounded-lg'
                            : 'bg-yellow-200 p-2 rounded-lg'
                      }>{order.status}</span>
                    </p>
                    <p>
                      {order.date}
                    </p>
                    <div className='sm:flex justify-between items-center'>
                      <p >
                        {order.method}
                      </p>
                      <BsThreeDotsVertical />

                    </div>
                  </li>
                ))
              }
            </ul>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Orders
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { ordens } from '../data/ordens'

function Customers() {
  return (
    <div className='bg-gray-100 w-full'>
      <div className='flex justify-between p-4'>
        <h2>Clientes</h2>
        <h2>Bem Vindo de Volta, Clint</h2>
      </div>

      <div className='p-4 overflow-scroll w-full h-[40vh]'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-0 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Ordens Passadas</span>
            <span className='hidden sm:grid'>Método</span>
          </div>
          <ul className='overflow-scroll h-full' >
            {
              ordens.map((order, id) => (
                <li key={id}
                  className='bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                  <div className='flex items-center'>
                    <div className='bg-purple-100 p-3 rounded-lg'>
                      <BsPersonFill className='text-purple-800' />
                    </div>
                    <p className='pl-2'>{order.name.first + " " + order.name.last}</p>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right lowercase'>{order.name.first}@hotmail.com</p>
                  <p className=' flex'>{order.date}</p>
                  <div className='flex gap-2 items-center'>
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))
            }
          </ul>

        </div>

      </div>
    </div >
  )
}

export default Customers
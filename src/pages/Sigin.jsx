import { useState } from 'react'
import Logo from '../assets/logo1.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../store/firebase'

import { BiSolidLogInCircle } from 'react-icons/bi'

function Sigin() {
  const [user, setUser] = useState(null)

  const handleClickAuth = async () => {
    const provider = new GoogleAuthProvider()


    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        setUser(result.user)

      }
      )
      .catch((error) => console.log(error))
  }

  return (
    <div className='w-full flex-col h-screen flex items-center justify-center'>
      <div className=' flex-col items-center justify-start flex bg-[rgba(0,0,0,0.6)] p-2 rounded-lg'>
        {
          user ? (
            <>
              <div className=" relative flex items-center justify-center flex-col mt-[-50px] ">
                <h2
                  onClick={() => setUser(null)}
                  className='absolute flex items-center justify-center bg-transparent cursor-pointer  text-white text-sm  top-[42px] right-[-8px] rounded-full'>
                  <BiSolidLogInCircle className='text-white border-transparent border-2 hover:border-red-600 rounded-full transition-all' size={30} />
                </h2>
                <img
                  className='w-[180px] h-[180px] mb-20 border-separate border-2 rounded-full object-cover'
                  src={user.photoURL} alt="avatar" />
                <h1 className='text-3xl text-white font-semibold mb-4'>{user.displayName}</h1>
                <p className="text-xl text-gray-400 w-[70%] text-center mb-10">{user.email}</p>
                {/* <button
                  onClick={() => handleClickAuth()}
                  className='p-3 text-xl font-bold text-white border-2 mb-10 rounded-md hover:bg-red-600 bg-red-500 border-red-400'>Entrar com Google</button> */}
              </div>
            </>
          ) : (
            <>
              <img src={Logo} width={300} alt="" />
              <div className="flex items-center justify-center flex-col mt-[-20px] ">
                <h1 className='text-3xl text-white font-semibold mb-4'>Acessar sua conta</h1>
                <p className="text-xl text-gray-400 w-[70%] text-center mb-4">Utlize sua conta google para acessar o site e realizar suas compras!</p>
                <button
                  onClick={() => handleClickAuth()}
                  className='p-3 text-xl font-bold text-white border-2 mb-10 rounded-md hover:bg-red-600 bg-red-500 border-red-400'>Entrar com Google</button>
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Sigin
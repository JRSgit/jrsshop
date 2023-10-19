import { CreditCard, Lock } from 'lucide-react'


function Footer() {
  return (
    <div className='flex w-full mt-20 '>
      <footer className='flex flex-col w-full'>
        <div className='flex flex-col text-gray-700 text-semibold bg-gray-200 items-start p-4  justify-start gap-4'>
          <h1>Ajuda</h1>
          <div className='flex gap-5 '>
            <div className='flex-col flex'>
              <a href="">Atendimento</a>
              <a href="">Atendimento</a>
              <a href="">Atendimento</a>
            </div>
            <div className='flex-col flex'>
              <a href="">Atendimento</a>
              <a href="">Atendimento</a>
              <a href="">Atendimento</a>
            </div>
          </div>

        </div>

        <div className='flex bg-gray-400 text-gray-700 p-4 items-center justify-around w-full'>
          <div className=''>
            <h1>Formas de Pagemnto</h1>
            <CreditCard width={40} color='gray' />
          </div>

          <div>
            <h1>Cartões Aceitos</h1>
          </div>

          <div className='flex'>
            <Lock width={50} color='gray' />
            <div>
              <h1>Segurança</h1>
              <span> Ambiente 100% seguro</span>
            </div>
          </div>
        </div>

        <div className='h-[80x] p-5 flex items-center justify-center bg-white'>
          <p>
            Copyright © 2023 JRShoud.
            Todos os direitos reservados.
          </p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
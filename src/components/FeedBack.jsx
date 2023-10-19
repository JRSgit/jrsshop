import { BsStarHalf, BsStarFill } from 'react-icons/bs'
import {
  AiOutlineCloseCircle,
  AiOutlineDislike,
  AiOutlineLike,
  AiFillDislike,
  AiFillLike,
} from 'react-icons/ai'


import star from '../assets/star.png'

import { coments } from '../data/comnets'
import { useState } from 'react'

const fotos = [
  'https://http2.mlstatic.com/D_NQ_NP_2X_804563-MLA69985391015_062023-O.webp',
  'https://http2.mlstatic.com/D_NQ_NP_2X_606863-MLA70242113629_062023-O.webp',
  'https://http2.mlstatic.com/D_NQ_NP_2X_792808-MLA70079025280_062023-O.webp',
  'https://http2.mlstatic.com/D_NQ_NP_2X_968962-MLA70016483398_062023-O.webp'
]

function FeedBack() {
  const [comentes, setComentes] = useState(coments)
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState('')



  const handleClickAddN = (id) => {
    const index = coments.findIndex((coment) => coment.id === id)
    const like = comentes.find((coment) => coment.id === id)
    like.nLike += 1
    like.like = true

    comentes.splice(index, 1, like)
    setComentes(comentes)

    setComentes((prev) => {
      return [...prev]
    })
    //setLikeB(true)

    // setDesLikeB(true)

  }

  const handleDesLike = (id) => {
    const index = coments.findIndex((coment) => coment.id === id)
    const deslike = comentes.find((coment) => coment.id === id)
    if (deslike.deslike) {
      deslike.deslike = false
      comentes.splice(index, 1, deslike)
      setComentes(comentes)

      setComentes((prev) => {
        return [...prev]
      })
    } else {
      deslike.deslike = true
      comentes.splice(index, 1, deslike)
      setComentes(comentes)

      setComentes((prev) => {
        return [...prev]
      })
      // setLikeB(true)

    }
  }

  const handleClickImg = (im) => {
    setImg(im)
    setOpen(true)
  }
  const handleClickCLoseDialog = () => {
    setOpen(false)
  }

  return (
    <div className='w-full border-2'>

      <div className=' w-full h-full flex gap-10 mx-[6%] mb-[200px]'>
        {/* Left */}

        <div className='flex flex-col w-[25%] gap-3'>
          <h2 className='text-3xl font-[300]'>Opiniões da categoria</h2>
          <div className='flex gap-3 items-center'>
            <strong className='text-5xl text-[#3FADFF]'>4.8</strong>
            <div className='flex flex-col'>
              <div className="flex gap-2">
                <img width={17} src={star} alt="" />
                <img width={17} src={star} alt="" />
                <img width={17} src={star} alt="" />
                <img width={17} src={star} alt="" />
                <img width={17} src={star} alt="" />
              </div>
              <small className='text-gray-500 text-md'>534 avaliações</small>
            </div>
          </div>

          <div className='flex w-full h-fit gap-2 items-baseline'>
            <div className='flex flex-col gap-5 w-full h-full border-2'>
              <p className='w-[100%] z-0 h-[5px] rounded-xl bg-gray-400'>
                <p className='w-[90%] h-[5px] z-10 rounded-xl bg-gray-700'></p>
              </p>
              <p className='w-[100%] z-0 h-[5px] rounded-xl bg-gray-400'>
                <p className='w-[70%] h-[5px] z-10 rounded-xl bg-gray-700'></p>
              </p>
              <p className='w-[100%] z-0 h-[5px] rounded-xl bg-gray-400'>
                <p className='w-[40%] h-[5px] z-10 rounded-xl bg-gray-700'></p>
              </p>
              <p className='w-[100%] z-0 h-[5px] rounded-xl bg-gray-400'>
                <p className='w-[20%] h-[5px] z-10 rounded-xl bg-gray-700'></p>
              </p>
              <p className='w-[100%] z-0 h-[5px] rounded-xl bg-gray-400'>
                <p className='w-[5%] h-[5px] z-10 rounded-xl bg-gray-700'></p>
              </p>
            </div>
            <div className='flex flex-col'>
              <span className='flex items-center gap-1'>5<BsStarFill size={12} color="gray" /></span>
              <span className='flex items-center gap-1'>4<BsStarFill size={12} color="gray" /></span>
              <span className='flex items-center gap-1'>3<BsStarFill size={12} color="gray" /></span>
              <span className='flex items-center gap-1'>2<BsStarFill size={12} color="gray" /></span>
              <span className='flex items-center gap-1'>1<BsStarFill size={12} color="gray" /></span>
            </div>
          </div>

          <div className='mt-5 h-fit '>
            <h3 className='text-xl'>Avaliação de características</h3>
            <div className='flex flex-col mt-3'>
              <h5 className='text-gray-500'>Custo-benefício</h5>
              <div className='flex'>
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarHalf size={18} color="#3FADFF" />
              </div>
            </div>
            <div className='flex flex-col mt-3'>
              <h5 className='text-gray-500'>Qualidade</h5>
              <div className='flex'>
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarHalf size={18} color="#3FADFF" />
              </div>
            </div>
            <div className='flex flex-col mt-3'>
              <h5 className='text-gray-500'>Conforto</h5>
              <div className='flex'>
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarFill size={18} color="#3FADFF" />
                <BsStarHalf size={18} color="#3FADFF" />
              </div>
            </div>
          </div>
        </div>

        {/* Rigth */}
        <div className='relative flex flex-col gap-3 w-[40%]'>
          {/* dialog */}
          <dialog
            className={`
              absolute  
              w-[120%] transition-all bg-white rounded-md h-[50%] shadow-xl shadow-[rgba(0,0,0,0.6)]
              `}
            open={open}
          >
            <div className='w-full h-full flex relative flex-col items-center justify-center p-2'>
              <button
                onClick={() => handleClickCLoseDialog()}
                className='absolute top-1 right-1'>
                <AiOutlineCloseCircle className='hover:text-red-500 transition-all' size={30} />
              </button>
              <div className='w-full h-full flex items-center justify-center'>

                <img
                  className=' w-[50%] h-full object-cover'
                  src={img} alt="" />
              </div>

            </div>
          </dialog>

          <div>
            {fotos &&
              <div className='flex flex-col mt-5'>
                <h1 className='text-xl mb-3'>Opiniões com fotos</h1>
                <div className='flex gap-3 h-[170px]'>
                  {fotos.map((fot, i) => (
                    <img
                      onClick={() => handleClickImg(fot)}
                      className='w-[115px] object-cover rounded-md h-full hover:cursor-pointer' key={i} src={fot} alt="" />
                  ))}
                </div>

              </div>
            }
          </div>
          <div className=' mt-20 max-h-[500px]'>

            {
              comentes && (
                <ul className=' h-full overflow-scroll pr-4 pl-4'>
                  {comentes.map((coment) => (
                    <li
                      className='mb-10 border-b border-gray-400'
                      key={coment.id}>
                      <div className='flex justify-between items-center'>
                        {coment.star > 3 ?
                          <div className='flex mb-3 gap-1'>
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                          </div> :
                          <div className='flex mb-3 gap-1'>
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                            <BsStarFill size={13} color="#3FADFF" />
                          </div>
                        }
                        <small className='text-gray-400 font-light'>{coment.date}</small>
                      </div>
                      {coment.imagens?.length > 0 &&
                        <div className='flex gap-4 '>
                          {coment.imagens.map((img, i) => (
                            <img
                              onClick={() => handleClickImg(img)}
                              className='w-[70px] h-[70px] object-cover rounded-md' key={i} src={img} alt="" />
                          ))
                          }
                        </div>
                      }
                      <p className='mt-3 mb-3 font-light'>{coment.coments}</p>
                      <div className='flex gap-4 mb-4 w-[200px]'>
                        <button
                          disabled={coment.deslike}
                          onClick={() => handleClickAddN(coment.id)}
                          className='flex items-center justify-center border-gray-400 px-3 rounded-3xl border w-[150px] hover:border-blue-500 hover:bg-blue-100 transition-all hover:text-blue-500'
                        >
                          é bom
                          {
                            coment.like ? (
                              <AiFillLike className='' size={20} />
                            ) : (
                              <AiOutlineLike className='' size={20} />
                            )
                          }
                          {coment.nLike}
                        </button>
                        <button disabled={coment.like}>
                          {
                            coment.deslike ? (
                              <AiFillDislike
                                onClick={() => handleDesLike(coment.id)}
                                className='px-2 rounded-full flex border border-gray-400 hover:border-blue-500 hover:bg-blue-100 transition-all hover:text-blue-500 ' size={35} />
                            ) : (
                              <AiOutlineDislike
                                onClick={() => handleDesLike(coment.id)}
                                className='px-2 rounded-full flex border border-gray-400 hover:border-blue-500 hover:bg-blue-100 transition-all hover:text-blue-500 ' size={35} />
                            )
                          }
                        </button>

                      </div>
                    </li>
                  ))}

                </ul>
              )
            }
          </div>

        </div>

      </div>

    </div>
  )
}

export default FeedBack
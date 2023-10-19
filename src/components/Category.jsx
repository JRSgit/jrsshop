/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../config/firebase'
import uniqid from 'uniqid'

import { Trash2, PlusCircle } from 'lucide-react'

import { addCategory, deleteCategory, indexCategory } from '../services/api'

export function AddCategory() {
  const [title, setTitle] = useState('')
  const [cor, setCor] = useState('')
  const [img, setImg] = useState()
  const [img64, setImg64] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { register, reset, formState: { errors } } = useForm()


  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(!loading)

    if (!title || !cor || !img) {
      setError("A campos vazios!")
      setLoading(false)
      setTimeout(() => {
        setError("")
      }, 1500)
      return
    }

    const nameFile = uniqid('', img.name)
    const storageRef = ref(storage, `imagens/${nameFile}`)
    const upTask = uploadBytesResumable(storageRef, img)

    upTask.on('state_changed',
      snapshot => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setLoading(true)
      },
      error => {
        console.log(error)
      },
      () => {
        getDownloadURL(upTask.snapshot.ref).then(url => {
          setTimeout(async () => {
            const data = { title, color: cor, imagem: url }
            const resp = await addCategory(data)
            console.log(resp)
            setLoading(false)
            reset()
            if (resp.status === 200) {
              setMessage('Categoria criada com sucesso!')
              setTimeout(() => {
                setMessage('')
                setImg64([])
              }, 2000)
              return
            }
            setMessage('Categoria não foi criada!')

          }, 1000)
        })
      }
    )

  }

  const changeImg = (file) => {
    setImg(file[0])
    const n = new FileReader()
    n.onload = img => {
      let imBase64 = img.target.result
      setImg64(imBase64)
    }
    n.readAsDataURL(file[0])
  }

  // const handleClickSend = async (e) => {
  //   e.preventDefault()
  //   console.log(title, cor, img)
  // }

  return (
    <div className='p-10 w-[50%] h-full mx-auto my-auto flex items-center justify-center  bg-gray-400 rounded-md '>
      <form onSubmit={(e) => onSubmit(e)} className='flex w-full flex-col gap-3 items-center justify-center '>
        {
          error && <p className='text-red-500 text-center m-0 p-0 '>{error}</p>
        }
        <p className='text-red-500 text-center m-0 p-0 '>{message}</p>
        <div className="flex gap-4 items-center justify-center">
          <span className="text-2xl">Title:</span>
          <input
            {...register('title', { required: true })}
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl rounded-md p-3 capitalize"
            type="text" placeholder='Digeite o nome da categoria' />
        </div>
        <div className="flex gap-4 items-center  justify-center">
          <span className="text-2xl">Imagem:</span>
          <input
            {...register('file', { required: true })}
            name='file'
            onChange={(e) => changeImg(e.target.files)}
            className="text-xl rounded-md p-3 capitalize w-[50%] "
            type="file"
          />
          {
            img64 && <img className='rounded-full w-[100px] h-[100px] object-cover' src={img64} />
          }
        </div>
        <p className='text-red-500 text-center m-0 p-0 '>{errors.color?.message}</p>
        <div className="flex gap-3 items-center">
          <span className="text-xl">Cor:</span>
          <select
            {...register('color')}
            onChange={(e) => setCor(e.target.value)}
            className="p-2" name="color" id="color">
            <option value="bg-black">Preto</option>
            <option value="bg-white">Branco</option>
            <option value="bg-red-500">Vermelho</option>
            <option value="bg-green-500">Verde</option>
          </select>
        </div>
        {
          loading ? (<div
            className='p-2 rounded-full mt-8 animate-ping bg-blue-500 text-white text-center '>
            <span>
              Carregando...
            </span>
          </div>) :
            (
              <div className='flex rounded-md bg-green-400 transition-all items-center hover:bg-green-500 p-2'>
                <PlusCircle width={40} color="white" />
                <input className="text-white cursor-pointer  text-xl  rounded-md" type="submit" value="Cadastrar" />
              </div>

            )
        }
      </form>
    </div>
  )
}

export const UpCategory = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [message, setMessage] = useState('')

  const handleRemoveCategory = async (id) => {
    const isTrue = confirm('Excluir essa Categoria?')
    if (!isTrue) return
    try {
      const resp = await deleteCategory(id)
      if (resp.status === 200) {
        setMessage('Deletado com SUCESSO')
        setTimeout(() => { setMessage('') }, 3000)
        return
      }
      setMessage('Ouve error ao tentar deletar!')
    } catch (error) {
      setMessage('Ouve error ao tentar deletar!')
    }
  }

  useEffect(() => {
    const request = async () => {
      setLoading(true)
      try {
        const resp = await indexCategory()
        setCategories(resp.data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
    request()
  }, [message])

  return (
    <div className='bg-gray-400 rounded-md p-10 w-[50%]'>
      {
        loading && <div className='w-[200px] h-[200px] rounded-full bg-blue-500 animate-ping' />
      }
      <div>
        <h1 className='text-white text-2xl text-center mb-2'>Categorias Cadastradas</h1>
        <p className='bg-orange-500 text-white mb-4 rounded-md  text-center text-xl'>{message}</p>
        <ul className='flex flex-col gap-2 w-full'>
          {
            categories.length !== 0 ? (categories.map((category) => (
              <li className='flex w-full bg-gray-200 p-2 rounded-md items-center justify-between' key={category._id}>
                <div className='flex flex-col items-start'>
                  <small>Titulo</small>
                  <span className='text-xl capitalize'>{category.title}</span>
                </div>
                <div className='flex flex-col items-center'>
                  <small>Cor</small>
                  <span className={`${category.color} px-1 rounded-sm w-[40px] h-[30px]`}></span>
                </div>
                <button
                  onClick={() => handleRemoveCategory(category._id)}
                  className='bg-red-400 rounded-md text-white hover:bg-red-500 transition-all p-2'>
                  <Trash2 width={30} color="white" />
                </button>
              </li>
            ))) : ('')
          }

        </ul>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../config/firebase'
import uniqid from 'uniqid'
import { addProduct, indexCategory } from '../services/api'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { toast } from 'react-toastify'
import { ListFilter, List } from 'lucide-react'

import { AddCategory, UpCategory } from '../components/Category'
import Products from '../components/Products'
import Dashboard from '../components/Dashboard'


function Admin() {

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  const [img64, setImg64] = useState([])
  const [buttonDes, setButtonDes] = useState(false)
  const [category, setCategory] = useState(false)
  const [products, setProducts] = useState(false)
  const [addProducts, setAddProducts] = useState(false)
  const [removeCategory, setRemoveCategory] = useState(false)
  const [dashboard, setDashboard] = useState(true)
  const [urlImg, setUrlImg] = useState([])
  const [imgChange, setImgChange] = useState([])
  const [listCategory, setListCategory] = useState([])
  const [nameCategory, setNameCategory] = useState('')
  const [color, setColor] = useState('')
  const [idCategory, setIdCategory] = useState()


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      price: 0,
      off: 0,
      descricao: '',
      tamanho: [],
      cor: [],
      file: []
    }
  });

  const onSubmit = data => {
    setLoading(true)
    changeAddDB(data, urlImg)
    setButtonDes(!buttonDes)
    setImgChange([])
    setUrlImg([])
    setImg64([])
    reset()


  }

  const changeImage = (data) => {
    const file = data.file

    for (let i = 0; i < file.length; i++) {

      const nameFile = uniqid('', file[i].name)
      const storageRef = ref(storage, `imagens/${nameFile}`)
      const upTask = uploadBytesResumable(storageRef, file[i])

      upTask.on('state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setLoading(true)
        },
        error => {
          console.log(error)
        },
        () => {
          getDownloadURL(upTask.snapshot.ref).then(url => {
            setUrlImg((prev) => [...prev, url])
            setImg64([])
            setLoading(false)
          })
        }
      )
    }

    setButtonDes(true)
    setUrlImg([])
    toast('Imagens enviadas com sucesso')

  }

  const changeAddDB = async (d, u) => {
    const { title, tamanho, descricao, price, off, cor } = d
    const dataUp = { title, tamanho, cor, descricao, price, off, u, nameCategory }
    addProduct(dataUp)
    toast('Produto cadastrado com sucesso', { theme: 'dark' })
    setImgChange([])
    setLoading(false)


  }

  const onChangeImg = (image) => {
    setImgChange(image)
    //setImgC(image)

  }

  const handleChangeCategory = (c, r, aP, p, d) => {
    setRemoveCategory(r)
    setCategory(c)
    setAddProducts(aP)
    setProducts(p)
    setDashboard(d)
  }

  const handleNameList = (n, c, id) => {
    setNameCategory(n)
    setColor(c)
    setIdCategory(id)
  }

  useEffect(() => {
    setImg64([])
    for (let i = 0; i < imgChange.length; i++) {

      const n = new FileReader()
      n.onload = img => {
        let imBase64 = img.target.result
        setImg64((prev) => [...prev, { imBase64 }])
      }
      n.readAsDataURL(imgChange[i])
    }
  }, [imgChange])

  useEffect(() => {
    const request = async () => {
      try {
        const resp = await indexCategory()
        setListCategory(resp.data)
      } catch (error) {
        return console.log(error.message)
      }
    }
    request()
  }, [])

  return (
    <div className='w-full h-full flex flex-col justify-start' >
      <Header />

      <div className=' flex w-full h-full'>

        <div
          className='flex mr-16  flex-col items-center  bg-blue-400 max-w-[250px] min-h-full'>
          <h1
            onClick={() => handleChangeCategory(false, false, false, false, true)}
            className='bg-white w-full text-center mb-10 text-2xl cursor-pointer'>
            Dashboard
          </h1>
          <ul className='flex flex-col items-center w-full justify-center'>
            <li className='w-full flex items-center justify-center p-1' >
              <button
                className='cursor-pointer rounded-md p-2 bg-white w-full hover:bg-gray-300 transition-all'
                onClick={() => handleChangeCategory(true, false, false, false, false)}>
                Add Cat.
              </button>
            </li>
            <li className='w-full flex items-center justify-center p-1'>
              <button
                className='cursor-pointer rounded-md p-2 bg-white w-full hover:bg-gray-300 transition-all'
                onClick={() => handleChangeCategory(false, true)}>
                Remove Cat.
              </button>
            </li>
            <li className='w-full flex items-center justify-center p-1 mt-4 border-t-2'>
              <div className='flex items-center rounded-md justify-center mt-2 p-2 bg-white w-full hover:bg-gray-300 transition-all'>
                <ListFilter width={30} color='gray' />
                <button
                  className='cursor-pointer  '
                  onClick={() => handleChangeCategory(false, false, true, false, false)}>
                  Cadastrar Produtos
                </button>

              </div>
            </li>
            <li className='w-full flex items-center justify-center p-1'>
              <div className='flex items-center rounded-md justify-center mt-2 p-2 bg-white w-full hover:bg-gray-300 transition-all'>
                <List width={30} color='gray' />
                <button
                  className='cursor-pointer  '
                  onClick={() => handleChangeCategory(false, false, false, true, false)}>
                  Todos os Produtos
                </button>
              </div>
            </li>
          </ul>
        </div>
        {/* ============= ///== /// ========================= */}
        {
          dashboard && <Dashboard />
        }
        {
          removeCategory && (

            <div className='flex w-[70%] items-center justify-center'>
              <UpCategory />
            </div>
          )
        }
        {
          category && <AddCategory />
        }
        {
          products && <Products />
        }

        {addProducts &&
          <div className='flex mr-20 gap-5 mb-40 mt-20  w-[70%] bg-slate-400 rounded-lg p-6 md:flex-wrap md:justify-center md:flex-col'>
            <div>
              {
                loading &&
                <div className='flex gap-2 w-full items-center justify-center'>
                  <div className='w-[20px] h-[20px] rounded-full bg-green-600 animate-ping'></div>
                  <div className='w-[20px] h-[20px] rounded-full bg-red-600 animate-ping'></div>
                  <div className='w-[20px] h-[20px] rounded-full bg-blue-600 animate-ping'></div>

                </div>
              }
              {
                nameCategory ? (
                  <h1 className='text-white text-2xl mb-4'>
                    Categoria selecionada:
                    <span className='p-2 bg-blue-500 ml-2 capitalize text-white font-bold rounded-md'>{nameCategory}</span>
                  </h1>
                ) : (
                  <h1 className='text-white text-2xl mb-2'>
                    Selecione uma Categoria:
                  </h1>
                )
              }

              <ul className='flex flex-wrap gap-2 w-full items-center justify-center'>
                {
                  listCategory && listCategory.map((list) => (
                    <li
                      onClick={() => handleNameList(list.title, list.color, list._id)}
                      key={list._id}
                      className={`${list.color} cursor-pointer border-b-4 transition-all border-transparent hover:border-yellow-500 p-2 rounded-md text-blue-600 capitalize`}>
                      {list.title}
                    </li>
                  ))
                }
              </ul>

            </div>
            <div>
              {
                urlImg.length !== 0 ? (
                  <form className='flex flex-col justify-center gap-3' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-white text-2xl text-center'>Adicione seu Produtos</h1>
                    {
                      loading &&
                      <div className='flex gap-2 w-full items-center justify-center'>
                        <div className='w-[20px] h-[20px] rounded-full bg-green-600 animate-ping'></div>
                        <div className='w-[20px] h-[20px] rounded-full bg-red-600 animate-ping'></div>
                        <div className='w-[20px] h-[20px] rounded-full bg-blue-600 animate-ping'></div>

                      </div>
                    }

                    <span>Title</span>
                    <p className='text-red-500 text-center m-0 p-0 '>{errors.title?.message}</p>
                    <input
                      className='p-2 rounded-md bg-[rgba(0,0,0,0.3)] outline-none text-white text-xl w-full'
                      {...register('title')}
                      required
                      placeholder='Digite o titulo do produto'
                      type="text" name='title'
                    />

                    <div className='flex gap-8 justify-around'>
                      <div>
                        <span>Preço</span>
                        <p className='text-red-500 text-center m-0 p-0'>{errors.price?.message}</p>
                        <input
                          className='p-2 rounded-md bg-[rgba(0,0,0,0.3)] outline-none text-white text-xl'
                          {...register('price', { required: true })}
                          required
                          type="number" name='price'
                        />
                      </div>
                      <div>
                        <span>Off(desconto)</span>
                        <p className='text-red-500 text-center m-0 p-0'>{errors.off?.message}</p>
                        <input
                          className='p-2 rounded-md bg-[rgba(0,0,0,0.3)] outline-none text-white text-xl'
                          {...register('off', { required: true })}
                          required
                          type="number" name='off' />
                      </div>

                    </div>
                    {/* SIZE */}
                    <div className='border p-2'>
                      <span>Tamanhos</span>
                      <p className='text-red-500 text-center m-0 p-0'>{errors.tamanho?.message}</p>
                      <div className='flex flex-wrap'>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={34} />
                        <small>34</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={35} />
                        <small>35</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={36} />
                        <small>36</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={37} />
                        <small>37</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={38} />
                        <small>38</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={39} />
                        <small>39</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={40} />
                        <small>40</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={41} />
                        <small>41</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={42} />
                        <small>42</small>
                        <input {...register('tamanho')} name='tamanho' className='ml-3' type="checkbox" value={43} />
                        <small>43</small>
                      </div>
                    </div>
                    {/* COLOR */}
                    <div className='p-2 border'>
                      <span>Cor</span>
                      <div className='flex flex-wrap'>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Preto' />
                        <small className='bg-black text-white px-2'>Preto</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Branco' />
                        <small className='bg-white px-2'>Branco</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Cinza' />
                        <small className='bg-gray-500 text-white px-2'>Cinza</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Vermelho' />
                        <small className='bg-red-500 text-white px-2'>Vermelho</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Verde' />
                        <small className='bg-green-500 text-white px-2'>Verde</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Azul' />
                        <small className='bg-blue-500 text-white px-2'>Azul</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Amarelo' />
                        <small className='bg-yellow-500 text-white px-2'>Amarelo</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Berge' />
                        <small className='bg-red-300 text-white px-2'>Berge</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Laranja' />
                        <small className='bg-orange-500 text-white px-2'>Laranja</small>
                        <input {...register('cor')} name='cor' className='ml-3' type="checkbox" value='Roxo' />
                        <small className='bg-purple-500 text-white px-2'>Roxo</small>
                      </div>
                      <p className='text-red-500 text-center m-0 p-0'>{errors.cor?.message}</p>
                    </div>
                    {/* DESCRIPTION */}
                    <div className='p-2 w-full  block'>
                      <span>Descrição</span>
                      <p className='text-red-500 text-center m-0 p-0'>{errors.descricao?.message}</p>
                      <textarea
                        required
                        className='p-2 outline-none rounded-md w-full'
                        {...register('descricao')} type="text" name='descricao'
                        placeholder='Digite uma descrição do produto'
                      />
                    </div>
                    <input
                      className='p-2 transition-all text-xl font-bold uppercase text-white hover:bg-blue-500 bg-blue-400 cursor-pointer mb-20' type="submit" value="Enviar" />
                  </form>
                ) : (
                  ''
                )
              }

            </div>

            {/* Change Imagens */}
            {/* ============================================================================================== */}
            <div className='flex flex-col items-center justify-center bg-blue-300 rounded-md shadow-md p-4'>
              <h1 className='text-white text-2xl mb-2'>Envie as Imagens do Produto <span className={`p-2 ${color} rounded-md capitalize text-blue-600`}>{nameCategory}</span> </h1>
              {img64 && <div className='w-full h-[100px] flex gap-4 justify-center'>
                {
                  img64 && img64.map((ur, i) => (
                    <img key={i} className='object-cover w-[100px] h-full  rounded-md shadow-xl' src={ur.imBase64} alt="" />
                  ))


                }
              </div>}

              <form action="" onSubmit={handleSubmit(changeImage)}>
                <div>
                  <span className='mt-2 block text-xl'>Imagens</span>
                  <input
                    className='p-2 rounded-md bg-[rgba(0,0,0,0.3)] cursor-pointer outline-none text-white text-xl'
                    {...register('file')} type="file" multiple

                    onChange={(e) => onChangeImg(e.target.files)}
                    name="file" id="file"
                  />
                </div>
                {
                  nameCategory !== '' ? (
                    <input
                      disabled={buttonDes}
                      className='w-full p-2 text-center text-white text-xl bg-blue-400 rounded-md mt-2 cursor-pointer '
                      type="submit"
                      value="Enviar"
                    />

                  ) : (
                    <span>Selecione a categoria para enviar as fotos</span>
                  )
                }
              </form>
            </div>
          </div>
        }


      </div>
      <Footer />

    </div >
  )
}

export default Admin
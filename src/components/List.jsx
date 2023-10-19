import { useDispatch, useSelector } from "react-redux"
import { amountAscItemsList, amountDecItemsList, removeItemList } from "../reducer/ListSlice"
import { FaTrashAlt } from 'react-icons/fa'
import { TbArrowBack } from 'react-icons/tb'
import { GoTrophy } from 'react-icons/go'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsChatLeft } from 'react-icons/bs'
import { BiTimer } from 'react-icons/bi'

import Header from "./Header"


function List() {
  // const [qtd, setQtd] = useState(0)
  const dispatch = useDispatch()
  const { listItems, listAmount } = useSelector(state => state.list)
  // const [totalP, setTotalP] = useState(0)

  // const listItems = [
  //   {
  //     name: 'Tênis Balmain',
  //     price: 337,
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //     qtd: 1,

  //   },
  //   {
  //     name: 'Tênis Balmain',
  //     price: 327,
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //     qtd: 2,
  //     off: 10

  //   },
  //   {
  //     name: 'Tênis Balmain',
  //     price: 217,
  //     description: 'Tenis de casual smartfit',
  //     image: 'https://i0.wp.com/rickatacado.com/wp-content/uploads/2023/02/R-450-BLN-29.jpg?fit=2880%2C1456',
  //     qtd: 1,

  //   },
  // ]

  const changeAddQtd = (id) => {
    dispatch(amountAscItemsList(id))
  }
  const changeRemoveQtd = (id) => {
    dispatch(amountDecItemsList(id))

  }
  const handleDeleteItem = (id) => {
    let isDelete = confirm("Remover todo o produto?")
    if (!isDelete) return
    dispatch(removeItemList(id))
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex gap-4 w-full h-full items-start justify-center p-10">

        <section className="bg-gray-200 flex-col flex flex-1 p-4 rounded-md">
          <h1>Listas aqui</h1>
          <ul>
            {
              listItems && listItems.map((item, i) => (
                <li key={i} className="mb-4 flex items-center justify-between p-2 gap-5 border-b-2 border-gray-400">
                  <div className="flex gap-2">
                    <img width={150}
                      className="rounded-md"
                      src={item.url[0]} alt="" />
                    <div className="flex flex-col gap-1">
                      <h1 className="w-50 ">{item.title}</h1>
                      <h3 className="w-50 text-red-500">R$ {item.price.toFixed(2)}</h3>
                      <small className="w-50 ">Star</small>
                    </div>
                    <div className="flex gap-1 items-center ">
                      <input className="w-10 h-12 rounded-md text-center" readOnly value={item.quantity} type="text" />
                      <div className="flex gap-1 flex-col items-center justify-center">
                        {item.countInStock > item.quantity ?
                          (<button
                            onClick={() => changeAddQtd(item.id)}
                            className="w-10 h-10 text-2xl text-center hover:bg-gray-300 transition-all text-md rounded-full bg-gray-200">
                            +
                          </button>)
                          :
                          ('')
                        }
                        {item.quantity > 1 ?
                          (<button
                            onClick={() => changeRemoveQtd(item.id)}
                            className="w-10 h-10 text-2xl text-center hover:bg-gray-300 transition-all  text-md rounded-full bg-gray-200">
                            -
                          </button>)
                          :
                          ('')
                        }
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-md font-bold">Total</h1>
                      <span className="text-orange-500">R$ {(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  </div>
                  <div>
                    <FaTrashAlt
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-2 w-12 h-12 transition-all bg-gray-100 cursor-pointer hover:rounded-full"
                      size={45} color='red' title="Excluir" />
                  </div>
                </li>
              ))
            }
          </ul>
          <div className="flex items-baseline gap-4 justify-end">
            <h1 className="text-xl text-red-600">Total:</h1>
            <span className="w-fit h-12 rounded-md text-2xl p-2  bg-red-600 text-white" >
              R$ {listAmount.toFixed(2)}
            </span>
          </div>
        </section>

        <aside className="bg-gray-200 flex w-[30%] flex-col p-4 rounded-md">
          <div className="flex flex-col gap-2 border-gray-400 border p-2 rounded-md">
            <h1 className="text-xl text-green-600 mt-5">Frete Grátis</h1>
            <p className="text-gray-700 text-sm">
              Compras apartir de R$ 400,00 (quatrocentos reais) você tem frete grátis
            </p>
            <h3 className="text-md mt-6">Vendido por <strong className="text-blue-400">JRSHoud</strong></h3>
            <div className="flex flex-col gap-3 mt-5">
              <strong>Estoque disponivel</strong>
              <div className="flex gap-1">
                <span>Quantidade:</span>
                <select
                  className="font-bold"
                  name="quantity" id="quantity">
                  <option value={1}>1 unidade</option>
                  <option value={2}>2 unidade</option>
                  <option value={3}>3 unidade</option>
                  <option value={4}>4 unidade</option>
                </select>
                <span className="text-gray-500">(30 disponíveis)</span>
              </div>
              <div className="flex flex-col gap-3 w-full items-center mt-6">
                <button className="px-6 py-3 text-xl font-normal hover:bg-blue-600 transition-all bg-blue-500 rounded-md text-white w-[80%]">
                  Pagar Agora
                </button>
                <button className="px-6 py-3 text-xl font-normal hover:bg-blue-200 transition-all bg-blue-300 rounded-md text-blue-500 w-[80%]">
                  Continuar Comprando
                </button>
              </div>

              <div className="flex flex-col  w-full items-center mt-3">
                <div className="flex w-[80%] gap-3 items-start">
                  <TbArrowBack size={25} color="gray" />
                  <p className="text-gray-500 font-light">
                    <span className="text-blue-500 font-medium">Devolução grátis. </span>
                    Você tem 7 dias a partir da data de recebimento.
                  </p>
                </div>
                <div className="flex w-[80%] gap-3 items-start">
                  <MdOutlineSecurity size={25} color="gray" />
                  <p className="text-gray-500 font-light">
                    <span className="text-blue-500 font-medium">Compra Garantida. </span>
                    receba o produto que está esperando ou devolvemos o dinheiro.
                  </p>
                </div>
                <div className="flex w-[80%] gap-3 items-start">
                  <GoTrophy size={25} color="gray" />
                  <p className="text-gray-500 font-light">
                    <span className="text-blue-500 font-medium">Pontos Houd. </span>
                    Você acumula 100 pontos a cada R$ 200,00 de compras.
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* ========================== */}
          <div className="flex flex-col border border-gray-400 mt-10 rounded-md p-2">
            <h2 className="text-xl font-medium text-center">Informações sobre o vendedor</h2>
            <div className="flex gap-2 justify-center  items-center mt-10">
              <div className="min-h-[10px] max-h-[10px] w-[60px] bg-red-200" />
              <div className="min-h-[10px] max-h-[10px] w-[60px] bg-yellow-200" />
              <div className="min-h-[10px] max-h-[10px] w-[60px] bg-orange-300" />
              <div className="min-h-[10px] max-h-[10px] w-[60px] bg-green-200" />
              <div className="min-h-[15px] w-[60px] bg-[#39B54A]"></div>
            </div>
            <div className="flex mt-6 items-center justify-center px-10">
              <div className="w-[150px] flex flex-col items-center justify-center p-4 border-r border-gray-400">
                <h1 className="font-medium text-2xl">+100</h1>
                <p className="text-center text-gray-600">
                  Vendas nos últimos 60 dias
                </p>
              </div>
              <div className="w-[150px] flex flex-col items-center justify-center p-4 border-r border-gray-400">
                <BsChatLeft size={30} color="gray" />
                <p className="text-center text-gray-600">
                  Presta um bom atendimento
                </p>
              </div>
              <div className="w-[150px] flex flex-col items-center justify-center p-4">
                <BiTimer size={40} color="gray" />
                <p className="text-center text-gray-600">
                  Entrega os produtos dentro do prazo
                </p>
              </div>
            </div>
            <a href="#" className="text-blue-600 text-center mt-4">Saiba mais sobre JRSHoud</a>

          </div>
          {/* ======================= */}
          <div className="flex flex-col border border-gray-400 mt-10 rounded-md px-6 py-3 gap-3">
            <h2 className="text-center text-xl">Meios de Pagamento</h2>
            <h3>Até 12x sem juros no cartão de crédito</h3>
            <img width={100} src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" alt="" />
            <h3 className="text-xl">Cartões de crédito</h3>
            <p className="text-gray-500">Pague em até 12x!</p>
            <div className="flex gap-4">
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="" />
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="" />
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/ddf23a60-f3bd-11eb-a186-1134488bf456-m.svg" alt="" />
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/ed8d6fd0-f3bd-11eb-9984-b7076edb0bb7-m.svg" alt="" />
            </div>
            <h3 className="text-xl">Cartão de Débito</h3>
            <div className="flex gap-4">
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/1e7db140-6f0b-11ec-813c-8542a9aff8ea-m.svg" alt="" />
              <img width={50} src="https://http2.mlstatic.com/storage/logos-api-admin/d2407420-f3bd-11eb-8e0d-6f4af49bf82e-m.svg" alt="" />
            </div>
            <h3 className="text-xl">Outras Formas de pagamento</h3>
            <p className="text-gray-500">Pix</p>
            <a href="#" className="text-blue-600">Conheça outros meios de pagamento</a>
          </div>
        </aside>

      </div>

    </div>
  )
}

export default List
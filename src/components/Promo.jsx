import { Link } from "react-router-dom"


function Promo() {
  return (
    <div className="flex flex-col overflow-hidden p-2 mb-10 ">
      <header className="flex justify-between p-4 bg-gradient-to-tr bg-red-500 rounded-t-md">
        <h1 className="text-white"> "🔥 Torça com estilo: As novas camisas de time chegaram! ⚽"</h1>

      </header>
      <div className="md:p-6 bg-times bg-cover h-fit rounded-b-lg p-2">
        <p className="text-center text-white text-xl p-2 bg-[rgba(0,0,0,0.4)] mb-2 rounded-md">Quer mostrar seu apoio ao time de coração com um visual incrível?</p>
        <p className="text-center text-white text-xl p-2 bg-[rgba(0,0,0,0.4)] mb-2 rounded-md">Descubra nossas camisas exclusivas e mergulhe no espírito da vitória.</p>
        <p className="text-center text-white text-xl p-2 bg-[rgba(0,0,0,0.4)] mb-2 rounded-md">Vista a paixão, sinta a vitória. Adquira já a sua!</p>
        <p className="text-center text-white text-xl p-2 bg-[rgba(0,0,0,0.4)] mb-2 rounded-md">Compre agora e seja o melhor torcedor do jogo! 🛒</p>
      </div>

    </div>
  )
}

export default Promo

export function Beneficio() {
  return (
    <div className="flex flex-col gap-4 p-4 mb-20">
      <h1 className="text-2xl font-light">Benefícios ao ser Plus</h1>
      <div className="flex w-full pb-2 overflow-x-scroll  gap-3">
        {/* CARD */}
        <div className="flex pl-3 pb-3 min-w-[320px] md:w-[500px] rounded-md overflow-hidden bg-cover min-h-[280px] items-end justify-start bg-[url('https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/disney_star_widgetmulti_mobdsk_mlb_@2x.jpg')]">
          <div className="flex gap-3">
            <div className="w-16 h-14 rounded-md bg-white" />
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-semibold">Filmes e diverção</h2>
              <h3 className="text-lg text-white">3 indicação a cada mês.</h3>
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="flex pl-3 pb-3 min-w-[320px] md:w-[500px] rounded-md overflow-hidden bg-cover min-h-[280px] items-end justify-start bg-[url('https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/disney_star_widgetmulti_mobdsk_mlb_@2x.jpg')]">
          <div className="flex gap-3">
            <div className="w-16 h-14 rounded-md bg-white" />
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-semibold">Filmes e diverção</h2>
              <h3 className="text-lg text-white">3 indicação a cada mês.</h3>
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="flex pl-3 pb-3 min-w-[320px] md:w-[500px] rounded-md overflow-hidden bg-cover min-h-[280px] items-end justify-start bg-[url('https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/disney_star_widgetmulti_mobdsk_mlb_@2x.jpg')]">
          <div className="flex gap-3">
            <div className="w-16 h-14 rounded-md bg-white" />
            <div className="flex flex-col gap-1">
              <h2 className="text-white font-semibold">Filmes e diverção</h2>
              <h3 className="text-lg text-white">3 indicação a cada mês.</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export function BannerPromo() {
  return (
    <div className="p-4 flex ">
      <div className="h-[280px] w-[70%] bg-[url('https://http2.mlstatic.com/D_NQ_777831-MLA69861706767_062023-OO.jpg')] bg-cover" />
      <div className="flex flex-col items-center justify-center gap-2 bg-black w-[30%] p-4">
        <span className="text-white">ESCOVA ORAL-B</span>
        <h1 className="text-white text-3xl font-bold">LIMPA MELHOR</h1>
        <Link className="text-white" to='#'>Compre agora > </Link>
      </div>
    </div>
  )
}
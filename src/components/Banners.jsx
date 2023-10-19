import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Banners() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="md:h-[500px] w-full mb-10 mt-10 md:mt-0 bg-white"
      >
        <SwiperSlide className="relative">
          <div className="absolute md:top-20 flex md:justify-between justify-around md:left-[100px] md:w-[90%]">
            <div>
              <h1 className="md:text-6xl text-2xl md:mt-[330px] mt-52   text-blue-600 md:text-end ">Camisas tecido Egípicio </h1>
              {/* <span className="p-4 bg-[rgba(255,255,255,0.7)] rounded-lg mt-[120px] font-bold text-2xl text-red-500 rotate-[-12deg] flex w-fit">Fio 40.1 Premium</span> */}
            </div>
            <div>
              <h3 className="md:mt-20 mt-36  md:p-4 p-2 bg-white text-red-500 font-bold md:text-8xl text-2xl rounded-lg rotate-[25deg] flex  animate-bounce">10% off</h3>

            </div>
          </div>
          <img
            className="object-container w-full h-full"
            src="https://www.wallpapers4u.org/wp-content/uploads/hugo_boss_guy_suit_advertising_mens_cosmetics_45420_1920x1080.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute top-20 flex md:justify-between justify-around md:left-[100px] w-[90%]">
            <div>
              <h1 className="md:text-8xl font-bold text-4xl mb-10 w-[70%] text-white text-center  rounded-lg md:p-4">Nike</h1>
              <span className="p-4 bg-[rgba(255,255,255,0.7)] rounded-lg md:mt-[225px] font-bold text-2xl  flex w-fit">Você preparado para qualquer desafio!</span>
            </div>
            <div>
              <h3 className="md:mt-20 p-4 bg-white text-red-500 font-bold md:text-6xl rounded-lg rotate-[25deg] flex  animate-ping">10% off</h3>

            </div>
          </div>
          <img
            className="object-cover "
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fgreen_white_red_nike_shoe_in_blur_light_background_hd_nike-1600x900.jpg&f=1&nofb=1&ipt=482e6ccdd947f01f27ebd152a3e6d4ac316d7e1b8d7901b7d596c15512feb55d&ipo=images" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute top-20 flex md:justify-between justify-around md:left-[100px] w-[90%]">
            <div>
              <h1 className="md:text-8xl text-2xl font-bold mb-10 w-fit text-white text-center bg-[rgba(0,0,0,0.5)]  rounded-lg p-4">Torricella</h1>
              <span className="px-4 py-2 bg-[rgba(255,255,255,0.8)] rounded-lg md:mt-[180px] text-blue-500 font-bold md:text-2xl text-lg  flex w-fit">Calçando seus pés com estilo  e elegância!</span>
            </div>
            <div className="">
              <h3 className="mt-20 p-4 text-4xl bg-white text-red-500 font-bold md:text-6xl rounded-lg rotate-[25deg] flex ">10% off</h3>

            </div>
          </div>
          <img
            className="object-cover "
            src="https://1.bp.blogspot.com/-jdOK0npFPq8/VpTInCemaiI/AAAAAAAADsE/ROGHH585ueI/s1600/Fotor_145255964053964.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute top-20 md:top-10 flex justify-end md:left-[100px] w-[90%]">
            <div className="flex flex-col md:justify-between justify-around hfull">
              <h1 className="md:text-6xl text-4xl font-bold mb-10 w-fit text-white text-center bg-[rgba(0,0,0,0.5)]  rounded-lg p-4">Vista-se Bem!</h1>
              <span className="px-4 py-2 bg-[rgba(0,0,0,0.6)]  rounded-lg md:mt-[220px]  text-blue-500 font-bold md:text-2xl  flex w-fit">As melhores camisas para os melhores looks!</span>
            </div>
            <div>
              <h3 className="mt-20 p-4 bg-white text-red-500 font-bold md:text-6xl text-2xl rounded-lg rotate-[25deg] flex ">10% off</h3>

            </div>
          </div>
          <img
            className="object-cover "
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmodasemcensura.com%2Fwp-content%2Fuploads%2F2016%2F10%2F%25C3%25B3culos-masculino-2017-tend%25C3%25AAncia-masculina-dicas-de-moda-dicas-de-estilo-moda-masculina-como-ser-estiloso-como-ter-estilo-alex-cursino-moda-sem-censura-blog-de-moda-digital-influencer-social-media.jpg&f=1&nofb=1&ipt=34e38ecf646530150df1bde1a8ed31a91eb0dcb4c1ca984fdb4e144586ea7807&ipo=images" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Banners
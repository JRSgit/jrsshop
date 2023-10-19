import BarChart from "./BarChart"
import Customers from "./Customers"
import Orders from "./Orders"
import RecentOrdens from "./RecentOrdens"


function Dashboard() {
  return (
    <div className="flex w-full p-2 flex-col gap-3">

      <div className="flex max-md:flex-col max-md:justify-center items-center justify-between p-2 gap-3 mt-10 w-full">

        <div className="flex w-full gap-4 bg-gray-100 px-2 justify-between py-4  shadow-xl rounded-md">
          <img className="w-[50px] h-[50px] rounded-full" src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples-730x410.png" alt="" />
          <div className="flex flex-col">
            <span>3.000</span>
            <span className="text-sm text-gray-400">Total de Produtos</span>
          </div>
          <p className="py-4 px-2 bg-green-300 rounded-md">+18%</p>
        </div>
        <div className="flex w-full gap-4 bg-gray-100 px-2 justify-between py-4  shadow-xl rounded-md">
          <img className="w-[50px] h-[50px] rounded-full" src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples-730x410.png" alt="" />
          <div className="flex flex-col">
            <span>3.000</span>
            <span className="text-sm text-gray-400">Total de Produtos</span>
          </div>
          <p className="py-4 px-2 bg-green-300 rounded-md">+18%</p>
        </div>
        <div className="flex w-full gap-4 bg-gray-100 px-2 justify-between py-4  shadow-xl rounded-md">
          <img className="w-[50px] h-[50px] rounded-full" src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples-730x410.png" alt="" />
          <div className="flex flex-col">
            <span>3.000</span>
            <span className="text-sm text-gray-400">Total de Produtos</span>
          </div>
          <p className="py-4 px-2 bg-green-300 rounded-md">+18%</p>
        </div>
        <div className="flex w-full gap-4 bg-gray-100 px-2 justify-between py-4  shadow-xl rounded-md">
          <img className="w-[50px] h-[50px] rounded-full" src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples-730x410.png" alt="" />
          <div className="flex flex-col">
            <span>3.000</span>
            <span className="text-sm text-gray-400">Total de Produtos</span>
          </div>
          <p className="py-4 px-2 bg-green-300 rounded-md">+18%</p>
        </div>
      </div>
      {/* ============================================ */}
      <div className="flex gap-3 flex-wrap">
        <div className="flex flex-col h-[50vh] w-[70%] bg-gray-300 p-4 rounded-md">
          <BarChart />
        </div>
        <div className="flex w-[28%] h-[60vh]  bg-gray-300 p-2 rounded-md">
          <RecentOrdens />
        </div>
      </div>
      {/* ============================================= */}
      <div className="flex gap-3 items-center">
        <div className="flex w-[80%] h-[50vh]  bg-gray-100 p-4 rounded-md">
          <Customers />
        </div>
        <div className="flex flex-2 mr-4 w-[18%] h-full bg-green-500 p-4 rounded-md">
          Conteudo aqui.
        </div>
      </div>
      {/* Orders */}
      <div>
        <Orders />
      </div>

    </div>
  )
}

export default Dashboard
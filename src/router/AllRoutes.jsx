import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Tenis from '../pages/Tenis'
import DetalheProduct from '../components/DetalheProduct'
import FinanceTrakerBlog from '../pages/FinanceTrakerBlog'
import ProductForCategory from '../pages/ProductForCategory'
import Products from '../pages/Products'
import List from '../components/List'
import Admin from '../pages/Admin'
import Sigin from '../pages/Sigin'
import NotFound from '../pages/NotFound'
import ArticleDetail from '../components/blog/ArticleDetail'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Sigin />} />
        <Route path='/tenis' element={<Tenis />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<DetalheProduct />} />
        <Route path='/productsForCategory/:nameCategory' element={<ProductForCategory />} />
        <Route path='/list' element={<List />} />
        <Route path='/adm' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/finance' element={<FinanceTrakerBlog />} />
        <Route path='/article/:id' element={<ArticleDetail />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
import { configureStore } from '@reduxjs/toolkit'
import ListSlice from '../reducer/ListSlice'
import ProductSlice from '../reducer/ProductSlice'
import CategorySlice from '../reducer/AddCategory'

import { productsApi } from '../reducer/productsApi'

export const store = configureStore({
  reducer: {
    list: ListSlice,
    product: ProductSlice,
    category: CategorySlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)

})

export default store
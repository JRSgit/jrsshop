import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  status: null

}

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const res = await axios.get("http://localhost:3333/products")
    return res?.data

  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product(action.payload)
    },
    upProduct(state, action) {
      state.product(action.payload)
    },
    removeProduct(state, action) {
      state.product(action.payload)
    }
  },
  extraReducers: {
    [productFetch.pending]: (state) => {
      state.status = "pending"
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "success"
      state.items = action.payload
    },
    [productFetch.rejected]: (state) => {
      state.status = "rejected"
    },
  }
})

export const { addProduct, upProduct, removeProduct } = productSlice.actions

export default productSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],


}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.category(action.payload)
    },
    upCategory(state, action) {
      state.category(action.payload)
    },
    removeCategory(state, action) {
      state.category(action.payload)
    }
  }
})

export const { addCategory, upCategory, removeCategory } = categorySlice.actions

export default categorySlice.reducer

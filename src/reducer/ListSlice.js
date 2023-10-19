import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listItems: [],
  listQuantity: 0,
  listAmount: 0,

}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList(state, { payload }) {
      let prod = state.listItems.find((item) => item.id === payload.id)
      let c
      let s
      if (prod) {
        c = prod.color.indexOf(payload.color[0])
        s = prod.size.indexOf(payload.size[0])
      }
      if (prod && c === 0 && s === 0) {
        prod.quantity ? prod.quantity++ : prod.quantity = 1
        state.listAmount += prod.price
        state.listQuantity++
        return
      }
      payload.quantity = 1
      state.listItems.push(payload)
      state.listAmount += payload.price
      state.listQuantity++
    },
    amountAscItemsList(state, { payload }) {
      let prod = state.listItems.find((item) => item.id === payload)
      prod.quantity++
      state.listAmount += prod.price

    },
    amountDecItemsList(state, { payload }) {
      let prod = state.listItems.find((item) => item.id === payload)
      prod.quantity--
      state.listAmount -= prod.price
    },
    removeItemList(state, { payload }) {
      let item = state.listItems.find((ite) => ite.id === payload)
      state.listAmount -= (item.price * item.quantity)
      state.listQuantity--
      let index = state.listItems.findIndex((item) => item.id === payload)
      state.listItems.splice(index, 1)
    },

  }
})

export const {
  addToList,
  amountAscItemsList,
  removeList,
  amountDecItemsList,
  removeItemList
} = listSlice.actions

export default listSlice.reducer

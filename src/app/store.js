import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../features/Orderbook/orderSlice'

export default configureStore({
  reducer: {
    order: orderReducer
  }
})

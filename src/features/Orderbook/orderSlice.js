import { createSlice } from '@reduxjs/toolkit'
import { createTableData, udpateTable } from '../utils'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    tableData: []
  },
  reducers: {
    setTableData: (state, action) => {
      state.tableData = createTableData(action.payload)
    },
    updateTableData: (state, action) => {
      state.tableData = udpateTable(action.payload, state.tableData)
    }
  }
})

export const {
  setTableData,
  updateTableData
} = orderSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setTableAction = data => dispatch => {
  dispatch(setTableData(data))
}

export const updateTableAction = data => dispatch => {
  dispatch(updateTableData(data))
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectTable = state => state.order.tableData

export default orderSlice.reducer

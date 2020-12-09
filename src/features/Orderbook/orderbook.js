import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Table } from '../Table/table'
import { Chart } from '../Table/chart'

import {
  setTableAction,
  updateTableAction,
  selectTable
} from './orderSlice'

export function Orderbook () {
  const tableData = useSelector(selectTable)
  const dispatch = useDispatch()

  useEffect(() => {
    const subscribeMessage = JSON.stringify({
      event: 'subscribe',
      channel: 'book',
      symbol: 'tBTCUSD',
      len: 25
    })

    const webSocket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')

    webSocket.onopen = () => webSocket.send(subscribeMessage)

    webSocket.onmessage = evt => {
      const data = JSON.parse(evt.data)
      if (Array.isArray(data) && data[1].length > 3) {
        dispatch(setTableAction(data[1]))
      } else if (Array.isArray(data) && data[1].length === 3) {
        dispatch(updateTableAction(data[1]))
      }
    }

    return () => {
      if (webSocket.OPEN && !webSocket.CONNECTING) {
        webSocket.close()
      }
    }
  }, [])

  return (
    <div>
      <span className="span">
        <Table data={tableData.buy}/>
        <Chart data={tableData.buy}/>
      </span>
      <span className="span">
        <Table data={tableData.sell}/>
        <Chart data={tableData.sell} fill= 'red' transformX="1" transformY ="1" />
      </span>
    </div>
  )
}

const calculateTotal = (list) => {
  const totalList = []
  list.reduce((acc, ele) => {
    const { price, count, amount } = ele
    const total = Math.abs(parseFloat(acc.amount) + parseFloat(amount)).toFixed(3)
    const obj = {
      price,
      count,
      amount,
      total
    }
    if (acc.price) {
      totalList.push({ ...acc, total: acc.amount })
    }
    totalList.push(obj)
    return {
      amount: total
    }
  })
  return totalList
}

export const createTableData = (data) => {
  const buyObj = {}
  const sellObj = {}
  data.map((ele) => {
    const obj = {
      price: ele[0],
      count: ele[1],
      amount: Math.abs(ele[2]).toFixed(3)
    }
    ele[2] > 0 ? buyObj[obj.price] = obj : sellObj[obj.price] = obj
    return obj
  })

  const buySorted = calculateTotal(Object.values(buyObj).reverse().slice(0, 25))
  const sellSorted = calculateTotal(Object.values(sellObj).reverse().slice(0, 25))
  const split = {
    buy: buySorted,
    sell: sellSorted,
    buyObj,
    sellObj
  }
  return split
}

export const udpateTable = (value, { buyObj, sellObj }) => {
  /*
     [35,[18276,7,2.29340223]]
     [35,[18314,3,-1.01157617]]
     */
  const cloneBuyObj = {
    ...buyObj
  }
  const cloneSellObj = {
    ...sellObj
  }
  const obj = {
    price: value[0],
    count: value[1],
    amount: Math.abs(value[2]).toFixed(3)
  }
  value[2] > 0 ? cloneBuyObj[obj.price] = obj : cloneSellObj[obj.price] = obj

  const buySorted = calculateTotal(Object.values(cloneBuyObj).reverse().slice(0, 25))
  const sellSorted = calculateTotal(Object.values(cloneSellObj).reverse().slice(0, 25))
  const result = {
    buy: buySorted,
    sell: sellSorted,
    buyObj: cloneBuyObj,
    sellObj: cloneSellObj
  }
  return result
}

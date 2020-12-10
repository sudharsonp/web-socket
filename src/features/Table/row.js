import React from 'react'
import PropTypes from 'prop-types'

export const TableRow = ({ data: { price, count, amount, total } }) => {
  return (
    <React.Fragment>
        <tr>
            <td>{count}</td>
            <td>{amount}</td>
            <td>{total}</td>
            <td>{price}</td>
        </tr>
    </React.Fragment>
  )
}

TableRow.propTypes = {
  data: PropTypes.object
}
/*
data: PropTypes.object(PropTypes.shape({
    price: PropTypes.number,
    count: PropTypes.number,
    amount: PropTypes.number,
    total: PropTypes.number
  })) */

import React, { memo } from 'react'
import PropTypes from 'prop-types'

const row = ({ price, count, amount, total }) => {
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

export const TableRow = memo(row)

TableRow.propTypes = {
  price: PropTypes.number,
  count: PropTypes.number,
  amount: PropTypes.number,
  total: PropTypes.number
}
/*
data: PropTypes.object(PropTypes.shape({

  })) */

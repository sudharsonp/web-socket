import React from 'react'
import PropTypes from 'prop-types'

import { TableRow } from './row'

export const Table = ({ data = [] }) => {
  return (
    <table className="table">
         <thead>
            <tr>
                <th>Count</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{
             Array.isArray(data) && data.length
               ? data.slice(0, 25).map(
                   (ele, i) => (<TableRow key={i} data={ele}/>)
                 )
               : null
        }</tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array
}

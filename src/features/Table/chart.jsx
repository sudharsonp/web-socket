import React from 'react'
import PropTypes from 'prop-types'

/* const styles = {
  width: '100%',
  height: '408px',
  transform: 'scale(-1, 1)',
  zIndex: '0',
  pointerEvents: 'none',
  fill: 'green'
} */

export const Chart = ({ data = [], fill = 'green', transformX = -1, transformY = 1 }) => {
  const style = {
    fill,
    transform: `scale(${transformX},${transformY})`
  }
  return (
    <svg className='chart' style={style}>
        {
            Array.isArray(data) && data.length && data.slice(0, 25).map(
              (ele, i) => (
                <rect x="1" y={i * 17} width={`${ele.total}%`} height="17" fillOpacity="0.2" key={i}></rect>
              )
            )
        }
    </svg>
  )
}

Chart.propTypes = {
  data: PropTypes.array,
  fill: PropTypes.string,
  transformX: PropTypes.string,
  transformY: PropTypes.string
}

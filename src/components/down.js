import React from 'react'
import Box from '../system/box'

const arrow = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
  >
    <g>
      <path d="m30.711,63.306c0.393,0.393 0.907,0.589 1.422,0.589 0.514,0 1.028-0.196 1.422-0.589l21.237-21.239c0.785-0.786 0.785-2.059 0-2.844-0.786-0.785-2.059-0.785-2.844,0l-17.804,17.806v-54.781c0-1.11-0.899-2.011-2.011-2.011s-2.011,0.9-2.011,2.011v54.781l-17.808-17.806c-0.785-0.785-2.058-0.785-2.843,0-0.786,0.785-0.786,2.058 0,2.844l21.24,21.239z" />
    </g>
  </svg>
)

const Down = Box.extend({
  children: arrow,
  width: 30,
  cursor: 'pointer'
})

export default Down

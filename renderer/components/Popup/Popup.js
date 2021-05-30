import React from "react"
//import { Icon } from '@ant-design/compatible'

const Popup = ({record, visible, x, y}) => visible &&
  <ul className="popup" style={{left: `${x}px`, top: `${y}px`}}>
    <li>dd row</li>
    <li>Add sub row</li>
    <li>Delete Row</li>
    <li>Copy</li>
  </ul>

export default Popup
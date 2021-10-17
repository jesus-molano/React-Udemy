import React from 'react'
import Icon from '../Icon'

const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p>Select something</p>
      <p>or create an entry!</p>
      <i className="mt-5"><Icon iconToChoose='star' width="60" heigth='30'/></i>
    </div>
  )
}

export default NothingSelected

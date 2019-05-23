import React from 'react';
import Pic from './Pic'

const PicsList = (props) => {

  const mapPics = () => {
    return(
      props.doggos.map((element, index) => {
        return (
          <Pic
          url = {element.message}
          key = {index}
          />
        )
      })
    )
  }

  return(
    <div>
      {mapPics()}
    </div>
  )
}

export default PicsList

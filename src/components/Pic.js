import  React from 'react'
import './picslist.css'

const Pic = (props) => {
  return(
    <img src={props.url} alt={props.url} className='image'/>
  )
}

export default Pic

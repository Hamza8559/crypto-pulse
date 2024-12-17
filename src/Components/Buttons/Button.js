import React from 'react'
import '../Buttons/button.css'
import { Link } from 'react-router-dom';
export default function GetStarted({ title,link,styled }) {
  return (
    <>
      <button className='GetStarted' style={styled}>
        <Link to={`${link}`} className='d-block'>
          {title}
        </Link>
      </button>
    </>
  )
}

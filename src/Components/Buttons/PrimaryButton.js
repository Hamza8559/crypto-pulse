import React from 'react'
import '../Buttons/button.css'
import { Link } from 'react-router-dom';
export default function PrimaryButton({ title,link,className }) {
  return (
    <>
      <button  className={`${className} PrimaryButton`}>
        <Link to={`${link}`} className='d-block'>
          {title}
        </Link>
      </button>
    </>
  )
}


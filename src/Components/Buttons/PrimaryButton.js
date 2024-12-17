import React from 'react'
import '../Buttons/button.css'
import { Link } from 'react-router-dom';
export default function PrimaryButton({ title,link }) {
  return (
    <>
      <button className='PrimaryButton'>
        <Link to={`${link}`} className='d-block'>
          {title}
        </Link>
      </button>
    </>
  )
}


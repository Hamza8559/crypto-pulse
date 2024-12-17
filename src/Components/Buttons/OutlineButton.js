import React from 'react'
import '../Buttons/button.css'
import { Link } from 'react-router-dom';
export default function OutlineButton({ title, link, styled, icon }) {
  console.log("link",link)
  return (
    <>
      <button className='OutlineButton' style={styled}>
        <Link to={`${link}`} className='d-block'>
          {icon ? <img src={icon} className='mx-2' /> : false}
          {title}
        </Link>
      </button>
    </>
  )
}

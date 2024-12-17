import React from 'react'
import '../SearchBarCom/searcho.css'
import search_icon from '../../assests/images/icons/Search.png'

function SearchBars() {
  return (
    <>
      <div className='searchInputBox'>
          <input type="search" placeholder='Explore our network'/>
          <img src={search_icon} alt="" />
      </div>
    </>
  )
}

export default SearchBars
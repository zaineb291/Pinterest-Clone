import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


function Pin({pinSize, img, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img 
      className='mainPic' 
      src={img}
      alt=''
      />

      <div className='content'>
        <h3>{name}</h3>

        <div className='search'>
            <a href={link}>
            <SearchIcon className='SearchIcon'/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Pin

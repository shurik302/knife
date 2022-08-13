import React from 'react';
import '../stylesheets/Components.css';

function NewsHTML({ imageCard, nameState, dataState }) {
  return (
    <div className='NewsR'>
      <img src={imageCard}></img>
      <p>{nameState}</p>
      <p>{dataState}</p>
    </div>
  )
}

export default NewsHTML
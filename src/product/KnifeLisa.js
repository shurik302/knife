import React from 'react'
import SmallCard from '../components/SmallCard'

function KnifeLisa() {
  return (
    <SmallCard
                imageCard={require('../images/knifeLisa.png')}
                name='Нож Лиса'
                size='98*18'
                material='Орех,алюминий'
                quantity='12'
                price='2119 грн.'
            />
  )
}

export default KnifeLisa
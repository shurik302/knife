import React from 'react'
import SmallCard from '../components/SmallCard'

function Lantern() {
  return (
    <SmallCard
                imageCard={require('../images/fonar.png')}
                name='Фонарик'
                size='98*18'
                material='Металл'
                quantity='12'
                price='715 грн.'
            />
  )
}

export default Lantern
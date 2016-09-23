import React from 'react'
import PICTURE from './close-up.png'
import CSS from './styles.scss'

export const ProfilePhoto = props => {
  return <img className={ CSS.picture } src={ PICTURE } />
}
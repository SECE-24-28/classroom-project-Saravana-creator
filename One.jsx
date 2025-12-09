import React, { useContext } from 'react'
import DataContext from './context/DataContext'
export const One = () => {
    const {name}=useContext(DataContext)
  return (
    <div>
        <h1>hai {name}</h1>
    </div>
  )
}
"use client"
import React from 'react'
import { increment } from '@/lib/features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.value)
  return (
    <div>
      <h2>Header {counter}</h2>
      <button onClick={()=>dispatch(increment())}>inc</button>
    </div>
  )
}

export default Header

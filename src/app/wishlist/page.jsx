"use client"
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const wishlist = () => {
  const wishlist = useSelector(state=>state.wishlist.value)
  const dispatch = useDispatch()
  console.log(wishlist)
  return (
    <div>
      Wishlist
      <div>
        {
            wishlist.map((product) => (
                <div key={product.id}>
                    <Link href={`/product/${product.id}`}>
                        <Image width={200} height={200} alt={product.title} src={product.images[0]} />
                    </Link>
                    <h3>{product.title}</h3>
                    <button onClick={()=> dispatch(toggleHeart(product))}>Like</button>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default wishlist

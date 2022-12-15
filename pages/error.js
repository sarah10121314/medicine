import React from 'react'
import Image from 'next/image'
import ErrorImage from '../assets/imgs/404.jpg'

export default function error() {
  return (
    <div>
        <Image src={ErrorImage} alt="not found" />
    </div>
  )
}

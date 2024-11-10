import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>

      <header>
        <ul className="bg-pink-500 flex justify-around py-5">
          <li><Link href="/home" className="text-darkred no-underline">Home</Link></li>
          <li><Link href="/about" className="text-darkred no-underline">About</Link></li>
          <li><Link href="/contact" className="text-darkred no-underline">Contact</Link></li>
        </ul>
      </header>

      <h1 className="text-center text-darkred font-sans">Contact</h1>
    </div>
  )
}

export default Contact
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
                <Link className="navbar_link relative" href="/">HOME</Link>
                <Link className="navbar_link relative" href="/categories">CATEGORIES</Link>
                <Link className="navbar_link relative" href="/mens">MEN&apos;S</Link>
                <Link className="navbar_link relative" href="/womens">WOMEN&apos;S</Link>
                <Link className="navbar_link relative" href="/offers">OFFER&apos;S</Link>
                <Link className="navbar_link relative" href="/blogs">BLOGS</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
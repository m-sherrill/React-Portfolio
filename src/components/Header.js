import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <header id="header">

    </header>
  )
}

export default Header
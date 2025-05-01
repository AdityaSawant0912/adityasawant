import React from 'react'
import Detail from '../Detail'
function Footer() {
    let year = new Date().getFullYear()
  return (
    <footer>
        <Detail>© {year} Aditya Sawant | Made with ❤️</Detail>
    </footer>
  )
}

export default Footer
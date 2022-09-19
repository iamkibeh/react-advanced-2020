import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth)

  function checkSize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  return (
    <div>
      <h1> window</h1>
      <h2>size :{width}</h2>
    </div>
  )
}

export default ShowHide

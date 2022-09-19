import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('call use effect')
    if (count >= 1) {
      document.title = `new message ${count}`
    }
  }, [count])
  console.log('render component')
  return (
    <>
      <h1>{count}</h1>
      <h2>useEffect Basics</h2>
      <div className='btn' onClick={() => setCount(count + 1)}>
        click me
      </div>
    </>
  )
}

export default UseEffectBasics

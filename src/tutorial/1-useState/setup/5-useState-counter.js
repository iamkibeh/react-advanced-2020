import React, { useState } from 'react'

const UseStateCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <div style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>
        <div className='btn' onClick={decrement}>
          decrease
        </div>
        <div className='btn' onClick={reset}>
          reset
        </div>
        <div className='btn' onClick={increment}>
          increase
        </div>
      </div>
    </>
  )
}

export default UseStateCounter

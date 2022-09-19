import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h2>{isError && 'Error...'}</h2>
    </>
  )
}

export default ShortCircuit

import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  const { age, name, message } = person
  return (
    <>
      <h4>{age}</h4>
      <h4>{name}</h4>
      <h4>{message}</h4>
      <button
        type='button'
        className='btn'
        onClick={() => {
          setPerson({ ...person, message: 'you changed me' })
        }}
      >
        Change message
      </button>
    </>
  )
}

export default UseStateObject

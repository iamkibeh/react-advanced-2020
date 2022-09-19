import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [students, setStudents] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      const student = {
        id: new Date().getTime().toString(),
        name,
        email,
      }
      setStudents(() => [...students, student])
      console.log(students)
      setName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Name: </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>add person</button>
        {students.map((student) => {
          const { id, name, email } = student
          return (
            <div
              className='item'
              key={id}
              style={{
                backgroundColor: 'orange',
              }}
            >
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </form>
    </>
  )
}

export default ControlledInputs

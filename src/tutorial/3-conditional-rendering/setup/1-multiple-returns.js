import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('def user')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(res.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>loading ...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error ...</h1>
      </div>
    )
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns

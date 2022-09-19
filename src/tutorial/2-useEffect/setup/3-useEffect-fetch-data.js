import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  // const gitUsers = async () => {
  //   const resp = await fetch(url);
  //   const users = await resp.json();
  //   console.log(users)
  // }
  const gitUsers = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => setUsers(users))
  }
  useEffect(() => {
    gitUsers()
  }, [])
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt='' />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData

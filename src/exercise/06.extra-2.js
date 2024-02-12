// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.elements.usernameInput.value
    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const submitBtn = document.getElementById('submitBtn')
    const username = event.target.value
    const isValid = username === username.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
    isValid ? submitBtn.disabled = false : submitBtn.disabled = true; 

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input onChange={handleChange} id='usernameInput' type="text" />
      </div>
      <div role="alert" style={{color:'red'}}>{error}</div>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const [username, setUsername] = React.useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setUsername(value.toLowerCase());
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.elements.usernameInput.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input 
          id='usernameInput' 
          type="text" 
          value={username} 
          onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

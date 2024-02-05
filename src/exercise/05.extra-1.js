// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className, style, children}) => {
  style.fontStyle = 'italic';

  const box = <div
    className={'box ' + className}
    style={style}
    >
      {children}
    </div>

  return box
}

function App() {
  return (
    <div>
      <Box className='box--small' style={{backgroundColor: 'lightblue'}}> small lightblue box </Box>
      <Box className='box--medium' style={{backgroundColor: 'pink'}}> medium pink box </Box>
      <Box className='box--large' style={{backgroundColor: 'orange'}}> big lightblue box </Box>
    </div>
  )
}

export default App
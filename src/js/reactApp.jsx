import { createRoot } from 'react-dom/client'
import * as React from 'react'
import Alert from './alert.tsx'

const App = (props) => {
  return (
    <div style={{color : 'red'}}>
      Hello React App!
      <Alert message = 'Success!' />
    </div>
  )
}

const container = document.getElementById('react-root')
if (container) {
  createRoot(container).render(<App />)
} else {
  console.log("React App / is not found")
}

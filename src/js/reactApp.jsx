import ReactDom from 'react-dom'
import * as React from 'react'


const App = (props) => {
  return (
    <div style={{color : 'red'}}>
      Hello React App!
    </div>
  )
}

const reactRoot = document.getElementById('react-root')
if (reactRoot) {
  ReactDom.render(<App />, reactRoot)
} else {
  console.log("React App / is not found")
}

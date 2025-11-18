import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './componenets/A'
import { ErrorBoundary } from "react-error-boundary"
import B from './componenets/B'
import C from './componenets/C'

function mohd({ error }) {
  return <>
    <p>somthing went wrong {error.message} </p>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ErrorBoundary FallbackComponent={mohd}>
        <A />

      </ErrorBoundary> */}

      {/* <ErrorBoundary fallbackRender={({error, resetErrorBoundary}) => {
        return <>
          <h1> somthing went wrong .{error.message}</h1>
          <button onClick={() => resetErrorBoundary() }> reset </button >
        </>
      }}>
  <A />

      </ErrorBoundary > */}

      <ErrorBoundary fallback={<h1> <C/> </h1>}>
        <A />
      </ErrorBoundary>

      {/* <B/> */}
      <C/>
    </>
  )
}

export default App

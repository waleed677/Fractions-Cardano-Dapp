import { useState } from 'react'
import Homepage from './Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MeshProvider } from "@meshsdk/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MeshProvider>
        <div className="App">
          <Homepage />
        </div>
      </MeshProvider>
    </>
  )
}

export default App

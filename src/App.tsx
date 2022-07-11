import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { MainLayout } from './layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              className="rounded bg-cyan-500 px-6 py-2 text-white hover:bg-cyan-600"
              onClick={() => setCount(count => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
        <main>
          <p>This is a project</p>
          <p>for testing React and Typescript alongside with Vite</p>
          <p>using TheCocktailDB as API</p>
        </main>
      </div>
    </MainLayout>
  )
}

export default App

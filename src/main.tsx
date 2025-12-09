import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const Header = () => (
  <header className="bg-blue-600 dark:bg-gray-800 text-white dark:text-gray-100 p-4 text-center">
    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
  </header>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
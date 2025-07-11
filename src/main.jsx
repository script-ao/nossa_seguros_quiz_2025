import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {GameProvider} from "./context"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>

    <App />
    </GameProvider>
  </StrictMode>,
)

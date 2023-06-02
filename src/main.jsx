import React from 'react'
import ReactDOM from 'react-dom/client'
import { F1ContextProvider } from './Context/Context'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <F1ContextProvider>
      <App />
    </F1ContextProvider>
  </React.StrictMode>
)

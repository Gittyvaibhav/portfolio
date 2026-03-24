//starts React and mounts the app to the DOM


// Imports React's StrictMode, which helps catch potential problems in development.
import { StrictMode } from 'react'
// Imports the React 18 API used to create and mount the app's root.
import { createRoot } from 'react-dom/client'
// Loads the global stylesheet so its styles apply across the app.react-dom/client'
// React dom client is a module from React
// It handles rendering React into the browser (DOM)

import './index.css'
// Imports the top-level App component that contains the UI.
import App from './App.jsx'

// Finds the HTML element with id="root", creates a React root there,
// and renders the App inside StrictMode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

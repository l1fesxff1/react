// Import the necessary React and ReactDOM modules
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import the main App component
import App from './App.jsx'

// Import the CSS styles for the application
import '../style/css/style.css'

// Use ReactDOM's createRoot method to render the App component
// within the HTML element with the id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
    // Wrap the App component in React's StrictMode for development checks
    <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { MyContextProvider } from './components/context/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>

  // </React.StrictMode>,
)

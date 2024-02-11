import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Board from './Board.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Header />
      <Board />  
    </App>
  </React.StrictMode>,
)

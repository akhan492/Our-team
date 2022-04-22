import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'
import Teams from './Teams'
import Contact from './Contact'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    {/* <Counter/> */}
    <Teams/>
    <Contact/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

'use strict'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App.jsx'

let store = createStore(todoApp, ['Learn React.js!'])

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)

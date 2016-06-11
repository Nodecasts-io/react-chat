'use strict'

import React from 'react'
import ToDoList from './ToDoList.jsx'
import ToDoForm from './ToDoForm.jsx'
import { StyleSheet, css } from 'aphrodite'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.displayName = 'ToDoApplication'
  }

  render () {
    return (
      <div>
        <h1 className={css(styles.header)}>todos</h1>
        <div className={css(styles.app)}>
          <ToDoForm />
          <ToDoList />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    fontSize: '24px',
    padding: '25px'
  },
  header: {
    color: 'rgba(175, 47, 47, 0.15)',
    fontSize: '100px',
    fontWeight: '100',
    textAlign: 'center'
  }
})

export default App

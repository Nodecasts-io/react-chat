'use strict'

import React from 'react'
import ToDoList from './ToDoList.jsx'
import ToDoForm from './ToDoForm.jsx'
import { StyleSheet, css } from 'aphrodite'

module.exports = React.createClass({
  displayName: 'ToDoApplication',
  render: function(){
    return (
      <div className={css(styles.app)}>
        <ToDoList></ToDoList>
        <ToDoForm></ToDoForm>
      </div>
    )
  }
})

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#EEE',
    fontSize: '18px',
    padding: '25px'
  }
})

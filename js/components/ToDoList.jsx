'use strict'

import React from 'react'
import ToDoItem from './ToDoItem.jsx'
import { StyleSheet, css } from 'aphrodite'

module.exports = React.createClass({
  displayName: 'ToDoList',
  render: function(){
    return (
      <ul className={css(styles.toDoList)}>
        <ToDoItem></ToDoItem>
      </ul>
    )
  }
})

const styles = StyleSheet.create({
  toDoList: {
    padding: '25px'
  }
})

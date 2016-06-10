'use strict'

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

module.exports = React.createClass({
  displayName: 'ToDoItem',
  render: function(){
    return <li className={css(styles.toDoItem)}>Working</li>
  }
})

const styles = StyleSheet.create({
  toDoItem: {
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
    fontWeight: 'bold',
    listStyle: 'none'
  }
})

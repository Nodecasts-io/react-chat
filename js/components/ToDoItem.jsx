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
    borderBottom: '1px solid #ededed',
    color: '#4d4d4d',
    fontWeight: '300',
    listStyle: 'none',
    lineHeight: '3em',
    textIndent: '60px'
  }
})

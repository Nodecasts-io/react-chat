'use strict'

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

module.exports = React.createClass({
  displayName: 'ToDoForm',
  render: function(){
    return (
      <form >
        <input className={css(styles.toDoInput)} type="text" placeholder="Enter To Do Item here"></input>
      </form>
    )
  }
})

const styles = StyleSheet.create({
  toDoInput: {
    border: '1px solid #333',
    borderRadius: '3px',
    display: 'block',
    height: '50px',
    width: '100%'
  }
})

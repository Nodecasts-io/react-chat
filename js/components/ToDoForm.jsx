'use strict'

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

module.exports = React.createClass({
  displayName: 'ToDoForm',
  render: function(){
    return (
      <form >
        <input className={css(styles.toDoInput)} type="text" placeholder="What needs to be done?"></input>
      </form>
    )
  }
})

const styles = StyleSheet.create({
  toDoInput: {
    background: 'rgba(0, 0, 0, 0.0003)',
    border: 'none',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    boxSizing: 'border-box',
    fontSize: '24px',
    margin: '0',
    outline: 'none',
    padding: '16px 16px 16px 60px',
    width: '100%'
  }
})

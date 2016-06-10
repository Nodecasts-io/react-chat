'use strict'

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

class ToDoForm extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = 'ToDoForm'
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== 13) {
      return
    }

    event.preventDefault()

    // this.setState({
    //   items: this.state.items.concat([event.target.value])
    // })
  }

  render() {
    return (
      <form >
        <input
          className={css(styles.toDoInput)}
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={this.handleNewTodoKeyDown}
        >
        </input>
      </form>
    )
  }
}

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

export default ToDoForm

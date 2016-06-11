'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

class ToDoList extends React.Component {

  constructor (props) {
    super(props)
    this.displayName = 'ToDoList'
  }

  render () {
    const toDoItems = this.props.items.map((item) => {
      return <li className={css(styles.toDoItem)}>{item}</li>
    })
    return (
      <ul className={css(styles.toDoList)}>
        {toDoItems}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { items: state }
}

ToDoList = connect(mapStateToProps)(ToDoList)

const styles = StyleSheet.create({
  toDoList: {
    borderTop: '1px solid #e6e6e6',
    margin: '0',
    padding: '0'
  },
  toDoItem: {
    borderBottom: '1px solid #ededed',
    color: '#4d4d4d',
    fontWeight: '300',
    listStyle: 'none',
    lineHeight: '3em',
    textIndent: '60px'
  }
})

export default ToDoList

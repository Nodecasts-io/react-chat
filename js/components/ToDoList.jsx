'use strict'

import React from 'react'
import ToDoItem from './ToDoItem.jsx'

module.exports = React.createClass({
  displayName: 'ToDoList',
  render: function(){
    return (
      <ul>
        <ToDoItem></ToDoItem>
      </ul>
    )
  }
})

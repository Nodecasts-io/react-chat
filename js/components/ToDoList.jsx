'use strict'

import React from 'react'
var ToDoItem = require('./ToDoItem.jsx')

module.exports = React.createClass({
  render: function(){
    return (
      <ul>
        <ToDoItem></ToDoItem>
      </ul>
    )
  }
})

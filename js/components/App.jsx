'use strict'

import React from 'react'
import ToDoList from './ToDoList.jsx'
import ToDoForm from './ToDoForm.jsx'

module.exports = React.createClass({
  displayName: 'ToDoApplication',
  render: function(){
    return (
      <div className="app">
        <ToDoList></ToDoList>
        <ToDoForm></ToDoForm>
      </div>
    )
  }
})

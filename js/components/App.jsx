'use strict'

var React = require('react')
var ToDoList = require('./ToDoList.jsx')
var ToDoForm = require('./ToDoForm.jsx')

module.exports = React.createClass({
  render: function(){
    return (
      <div className="app">
        <ToDoList></ToDoList>
        <ToDoForm></ToDoForm>
      </div>
    )
  }
})

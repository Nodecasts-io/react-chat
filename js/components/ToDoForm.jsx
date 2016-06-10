'use strict'

import React from 'react'

module.exports = React.createClass({
  displayName: 'ToDoForm',
  render: function(){
    return (
      <form>
        <input type="text" placeholder="Enter To Do Item here"></input>
      </form>
    )
  }
})

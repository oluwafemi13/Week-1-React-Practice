import React, { Component } from 'react'
import Button from './Button'

export default class  extends Component {
  render() {
    return (
      <div>
        <h1>This is a class component and it is to be imported in the app.js file</h1>
        <Button props={"Class Button"}/>
      </div>
    )
  }
}

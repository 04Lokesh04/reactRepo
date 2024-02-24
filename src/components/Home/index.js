// Write your code here
import './index.css'

import {Component} from 'react'

import Login from './Login/index'

import Logout from './Logout/index'

import Message from './Message/index'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="messageContainer"></div>
        <Login />
      </div>
    )
  }
}

export default Home

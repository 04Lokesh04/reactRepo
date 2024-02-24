// Write your code here
import './index.css'

import Logout from './Logout/index'

import {Component} from 'react'

class Login extends Component {
  state = {click: true}
  onPress = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }
  render() {
    const {click} = this.state
    return (
      <div>
        {click === true ? (
          <div>
            <p className="Message">Please Login</p>
            <button className="button" type="button" onClick={this.onPress}>
              Login
            </button>
          </div>
        ) : (
          <Logout />
        )}
      </div>
    )
  }
}

export default Login

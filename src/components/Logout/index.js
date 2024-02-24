import './index.css'

import Login from './Login/index'

import {Component} from 'react'

class Logout extends Component {
  state = {click: false}
  onPress = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }
  render() {
    const {click} = this.state
    return (
      <div>
        {click === true ? (
          <Login />
        ) : (
          <div>
            <p className="Meassage">Welcome User</p>
            <button className="button" type="button" onClick={this.onPress}>
              Logout
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Logout

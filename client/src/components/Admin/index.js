import React from 'react'
import { connect } from 'react-redux'
import { loginAdmin } from '../../actions'

class Admin extends React.Component {

  state = {
    username: '',
    password: ''
  }

  changeName = username => this.setState({username})
  changePassword = password => this.setState({password})

  render() {
    const { username, password } = this.state
    return <div style={{
      height: 'calc(100vh - 100px)',
      margin: 'auto',
      marginTop: '20px',
      width: '300px'
    }}>
      <div className="admin-group" style={{ paddingTop: '150px' }}>
        <label>username</label>
        <input type="text" value={username} onChange={e => this.changeName(e.target.value)} />
      </div>
      <div className="admin-group">
        <label>password</label>
        <input type="password" value={password} onChange={e => this.changePassword(e.target.value)} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className="btn" onClick={() => this.props.loginAdmin(username, password)} >
          Go to Management
        </button>
      </div>
    </div>
  }
}

export default connect(null, { loginAdmin })(Admin)
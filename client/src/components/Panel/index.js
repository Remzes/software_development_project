import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Materialize from 'materialize-css'
import { deleteUser } from '../../actions'

class Panel extends React.Component {

  state = {
    users: this.props.users.users
  }

  remove = id => this.setState({ users: this.props.users.users.filter(user => user.googleId !== id)})
  getBanned = () => this.setState({ users: this.props.users.users.filter(user => user.banned) })
  getDeleted = () => this.setState({ users: this.props.users.users.filter(user => user.deleted) })
  getActive = () => this.setState({ users: this.props.users.users.filter(user => !user.banned && !user.deleted) })

  render() {
    return (
      <div style={{
        height: 'calc(100vh - 100px)',
        margin: 'auto',
        marginTop: '20px',
        width: '300px',
        paddingTop: '150px',
        display: 'flex',
        width: '100%'
      }}>
        <div className="panel-sidenav" style={{
          width: '200px',
        }}>
          <div className="collection" style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <a onClick={() => this.getActive()} className="collection-item">Active Users</a>
            <a onClick={() => this.getBanned()} className="collection-item">Banned Users</a>
            <a onClick={() => this.getDeleted()} className="collection-item">Deleted Users</a>
          </div>
        </div>
        <div className="panel-list" style={{ width: '1000px' }}>
          <h2 style={{ fontSize: '35px', textAlign: 'center' }}>List of users</h2>
          <div className="collection">
            {
              this.state.users.length > 0 && this.state.users.map((u, i) => {
                return (
                  <li className="collection-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{u.fullName}</span>
                    <span>{u.emailAddress}</span>
                    <span>{u.credits}</span>
                    <span><button onClick={() => {
                      this.remove(u.googleId)
                      this.props.deleteUser(u.googleId)
                    }}>Delete User</button></span>
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ users: state.users }), { deleteUser })(Panel)
import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import Materialize from 'materialize-css'
import c from 'classnames'
import { deleteUser, banUser } from '../../actions'

class Panel extends React.Component {

  state = {
    users: this.props.users.users,
    type: 'active'
  }

  componentDidMount() {
    this.getActive()
  }

  remove = id => this.setState({ users: this.props.users.users.map(user => {
      if (user.googleId === id) {
        user.removed = true
      }
      return user
    })
  })
  ban = id => this.setState({ users: this.props.users.users.map(user => {
      if (user.googleId === id) {
        user.banned = true
      }
      return user
    })
  })
  getBanned = () => this.setState({ users: this.props.users.users.filter(user => user.banned), type: 'banned' })
  getDeleted = () => this.setState({ users: this.props.users.users.filter(user => user.deleted), type: 'deleted' })
  getActive = () => this.setState({ users: this.props.users.users.filter(user => !user.banned && !user.deleted), type: 'active' })

  render() {
    console.log(this.state.users)
    return (
      <div style={{
        height: 'calc(100vh - 100px)',
        margin: 'auto',
        marginTop: '20px',
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
            <a onClick={() => this.getActive()} className={c('collection-item', { "active": this.state.type === 'active' })}>Active Users</a>
            <a onClick={() => this.getBanned()} className={c('collection-item', { "active": this.state.type === 'banned' })}>Banned Users</a>
            <a onClick={() => this.getDeleted()} className={c('collection-item', { "active": this.state.type === 'deleted' })}>Deleted Users</a>
          </div>
        </div>
        <div className="panel-list" style={{ width: '1100px' }}>
          <h2 style={{ fontSize: '35px', textAlign: 'center' }}>List of users</h2>
          <div className="collection" style={{ border: 0, marginLeft: '100px' }}>
            {
              this.state.users.length > 0 && this.state.users.map((u, i) => {
                return (
                  <li key={i} className="collection-item" style={{ display: 'flex', justifyContent: 'space-between', border: 0 }}>
                    <span style={{ flexBasis: '30%' }}>{u.username} {u.password}</span>
                    <span style={{ flexBasis: '30%' }}>{u.emailAddress}</span>
                    <span>Credits: {u.credits}</span>
                    <span><button className="btn" onClick={() => {
                      this.remove(u.googleId)
                      this.props.deleteUser(u.googleId)
                    }}>Delete User</button></span>
                      <span><button className="btn" onClick={() => {
                      this.ban(u.googleId)
                      this.props.banUser(u.googleId)
                    }}>Ban User</button></span>
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

export default connect(state => ({ users: state.users }), { deleteUser, banUser })(Panel)

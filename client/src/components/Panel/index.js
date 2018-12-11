import React from 'react'
import $ from 'jquery'
import Materialize from 'materialize-css'

class Panel extends React.Component {
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
            <a href="#!" className="collection-item">Active Users</a>
            <a href="#!" className="collection-item active">Banned Users</a>
            <a href="#!" className="collection-item">Deleted Users</a>
          </div>
        </div>
        <div className="panel-list" style={{ width: '1000px' }}>
          <h2 style={{ fontSize: '35px', textAlign: 'center' }}>Actual Users</h2>
        </div>
      </div>
    )
  }
}

export default Panel
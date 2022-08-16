import React, { Component } from 'react'

//so we can use <Link/>
import { Link, Outlet } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <>
        <div>Welcome to the Product Page</div>
          <nav>
            <Link to='/products'>Products</Link> | {' '}
            <Link to='/contacts'>Contacts</Link>
          </nav>
          <Outlet/>
      </>
    )
  }
}

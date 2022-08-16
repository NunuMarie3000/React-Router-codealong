import React, { Component } from 'react'

import { Link, Outlet } from 'react-router-dom'

import data from '../data.json'

export default class products extends Component {
  render() {
    return (
      <>
        <div style={{display: 'flex', gap:'10px', flexDirection: 'column'}}>
        {data.map(obj=> <Link to={`/products/${obj.id}`} key={obj.id}>{obj.Name}</Link>)}
        <Outlet/>
        </div>
      </>
    )
  }
}

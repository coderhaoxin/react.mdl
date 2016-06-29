
import { Component } from 'react'

import { Nav, NavItem } from '..'

class NavExample extends Component {
  render() {
    const style = {
      background: 'brown',
      height: '60px',
      margin: '5px'
    }

    return (
      <section>
        <div style={style}>
          <Nav>
            <NavItem>1</NavItem>
            <NavItem>2</NavItem>
            <NavItem>3</NavItem>
            <NavItem>4</NavItem>
          </Nav>
        </div>
        <div style={style}>
          <Nav title='hello nav'>
            <NavItem>a</NavItem>
            <NavItem>b</NavItem>
            <NavItem>c</NavItem>
            <NavItem>d</NavItem>
          </Nav>
        </div>
        <div style={style}>
          <Nav>
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem>three</NavItem>
            <NavItem>four</NavItem>
          </Nav>
        </div>
      </section>
    )
  }
}

export default NavExample

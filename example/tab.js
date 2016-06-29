
import { Component } from 'react'

import { TabPane, Tabs } from '..'

class TabExample extends Component {

  render() {
    return (
      <Tabs>
        <TabPane key='1' tab='one'>
          hello
        </TabPane>
        <TabPane key='2' tab='two'>
          world
        </TabPane>
        <TabPane key='3' tab='three'>
          go go go
        </TabPane>
      </Tabs>
    )
  }
}

export default TabExample

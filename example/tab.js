
import { Component } from 'react'

import { TabPane, Tabs } from '..'

class TabExample extends Component {

  state = {
    activeKey: '2'
  }

  componentDidMount() {
    setInterval(() => {
      const { activeKey } = this.state

      this.setState({
        activeKey: String(((activeKey | 0) + 1) % 3)
      })
    }, 2000)
  }

  render() {
    const { activeKey } = this.state

    return (
      <section>
        <Tabs defaultActiveKey='2'>
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

        <Tabs activeKey={activeKey}>
          <TabPane key='0' tab='one'>1</TabPane>
          <TabPane key='1' tab='two'>2</TabPane>
          <TabPane key='2' tab='three'>3</TabPane>
        </Tabs>
      </section>
    )
  }
}

export default TabExample

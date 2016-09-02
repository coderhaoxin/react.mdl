
import { Component, PropTypes, Children, cloneElement } from 'react'
import mdl from 'material-design-lite/material'
import classnames from 'classnames'

function noop() {}

class Tabs extends Component {

  static propTypes = {
    defaultActiveKey: PropTypes.string,
    onTabClick: PropTypes.func,
  }

  static defaultProps = {
    onTabClick: noop
  }

  state = {
    _prefix: 'material-tabs-' + Math.random().toString(36).slice(2),
    activeKey: ''
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialTabs')

    this.getDefaultActiveKey()
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  getDefaultActiveKey() {
    const { defaultActiveKey } = this.props

    if (defaultActiveKey) {
      this.setState({activeKey: defaultActiveKey})
      return
    }

    const { children } = this.props

    const keys = Children.map(children, child => child.key)

    if (keys.length) {
      this.setState({
        activeKey: keys[0]
      })
    }
  }

  onTabClick(key) {
    const { onTabClick } = this.props

    this.setState({activeKey: key})

    onTabClick(key)
  }

  getTabPanes() {
    const { activeKey, _prefix } = this.state
    const { children } = this.props

    const panes = []

    Children.forEach(children, child => {
      const { key } = child
      const active = activeKey === key

      panes.push(cloneElement(child, {
        id: _prefix + key,
        active
      }))
    })

    return panes
  }

  getTabBars() {
    const { activeKey, _prefix } = this.state
    const { children } = this.props

    const bars = []

    Children.forEach(children, child => {
      const { tab } = child.props
      const { key } = child

      const active = activeKey === key

      const classes = classnames({
        'mdl-tabs__tab': true,
        'is-active': active
      })

      bars.push((
        <a href={'#' + _prefix + key} key={key} className={classes}
          onClick={() => this.onTabClick(key)}>
          {tab}
        </a>
      ))
    })

    return bars
  }

  render() {
    const TabPanes = this.getTabPanes()
    const TabBars = this.getTabBars()

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className='mdl-tabs mdl-js-tabs mdl-js-ripple-effect'>
        <div className='mdl-tabs__tab-bar'>
          {TabBars}
        </div>
        {TabPanes}
      </div>
    )
  }
}

export default Tabs

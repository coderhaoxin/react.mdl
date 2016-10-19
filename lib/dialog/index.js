
import './index.css'

import { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import classNames from 'classnames'

import Content from './content'
import Action from './action'
import Title from './title'

import Button from '../button'

function noop() {}

class DefaultAction extends Component {

  static propTypes = {
    className: PropTypes.string,

    cancelText: PropTypes.string,
    onCancel: PropTypes.func,
    okText: PropTypes.string,
    onOk: PropTypes.func,
  }

  static defaultProps = {
    cancelText: 'cancel',
    onCancel: noop,
    okText: 'ok',
    onOk: noop
  }

  render() {
    const {
      cancelText,
      onCancel,
      okText,
      onOk
    } = this.props

    return (
      <Action>
        <Button raised onClick={onCancel}>{cancelText}</Button>
        <Button raised primary onClick={onOk}>{okText}</Button>
      </Action>
    )
  }
}

class Dialog extends Component {

  static propTypes = {
    className: PropTypes.string,

    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number
    ]),
    visible: PropTypes.bool,

    cancelText: PropTypes.string,
    onCancel: PropTypes.func,
    okText: PropTypes.string,
    onOk: PropTypes.func,
  }

  static defaultProps = {
    onCancel: e => e.preventDefault(),
    onOk: e => e.preventDefault()
  }

  componentDidMount() {
    this.refs.dialog.addEventListener('cancel', this.props.onCancel)
    if (this.props.visible) {
      findDOMNode(this).showModal()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible !== prevProps.visible) {

      if (this.props.visible) {
        findDOMNode(this).showModal()

        // const bodyHeight = document.body.clientHeight
        // const dialogHeight = this.refs.dialog.clientHeight
        // this.refs.dialog.style.position = 'fixed'
        // this.refs.dialog.style.top = `${(bodyHeight - dialogHeight) / 2}px`
      } else {
        findDOMNode(this).close()
      }
    }
  }

  componentWillUnmount() {
    this.refs.dialog.removeEventListener('cancel', this.props.onCancel)
  }

  render() {
    const {
      className,
      children,

      cancelText,
      onCancel,
      okText,
      onOk,

      title
    } = this.props

    const classes = classNames('mdl-dialog', className)

    return (
      <dialog ref='dialog' className={classes}>
        {
          !!title && (
            <Title>{title}</Title>
          )
        }
        <Content>
          {children}
        </Content>

        <DefaultAction cancelText={cancelText} okText={okText}
          onCancel={onCancel} onOk={onOk} />
      </dialog>
    )
  }
}

export default Dialog


import 'flatpickr/dist/themes/material_green.css'

import { Component, PropTypes } from 'react'

import Flatpickr from 'flatpickr'

class DateTimePicker extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { id } = this.props
    const node = document.querySelector(`#${id}`)

    Flatpickr.localize({
      weekdays: {
        shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      },
      months: {
        shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }
    })

    new Flatpickr(node, this.props)
  }

  render() {
    const { onChange, ...props } = this.props
    // ignore onChange
    return (
      <input {...props} className='flatpickr' />
    )
  }
}

export default DateTimePicker

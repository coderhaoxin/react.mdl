
import 'flatpickr/dist/flatpickr.material_green.min.css'

import { Component, PropTypes } from 'react'

import flatpickr from 'flatpickr'

class DateTimePicker extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { id } = this.props
    flatpickr(`#${id}`, this.props)
  }

  render() {
    const {
      onChange,
      id,
    } = this.props

    return (
      <input {...this.props} id={id} className='flatpickr'
        onChange={e => onChange(e.target.value, e)} />
    )
  }
}

export default DateTimePicker

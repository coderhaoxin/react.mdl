
import { unmountComponentAtNode, render } from 'react-dom'

import Dialog from './dialog'

export function createInstance() {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const dialog = render(<Dialog />, div)

  return {
    show(opts) {
      dialog.show(opts)
    },
    hide(key) {
      dialog.hide(key)
    },
    remove() {
      unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

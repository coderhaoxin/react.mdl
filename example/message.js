
import { message } from '..'

setTimeout(() => {
  const instance = message.createInstance()

  instance.show({
    type: 'success',
    content: 'OK',
    duration: 5000
  })

  instance.show({
    type: 'error',
    content: 'oh, no!',
    duration: 10000
  })

  instance.show({
    type: 'warn',
    content: 'hi!',
    duration: 15000
  })

  instance.show({
    content: 'none'
  })
}, 3000)

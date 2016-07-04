
import { message } from '..'

setTimeout(() => {
  const instance = message.createInstance()

  instance.show({
    type: 'success',
    content: 'OK',
    duration: 2000
  })

  instance.show({
    type: 'error',
    content: 'oh, no!',
    duration: 3000
  })

  instance.show({
    type: 'warn',
    content: 'hi!',
    duration: 3000
  })

  instance.show({
    content: 'none'
  })
}, 1000)

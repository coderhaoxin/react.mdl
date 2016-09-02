
import { Component } from 'react'

import {
  CardAction,
  CardTitle,
  CardMedia,
  CardMenu,
  CardText,
  Card,

  Button,
  Icon
} from '..'

class CardExample extends Component {
  render() {

    return (
      <div>
        <Card shadow={6}>
          <CardTitle>hello card</CardTitle>
          <CardText>just a demo</CardText>
          <CardMedia>
            <img src='https://avatars1.githubusercontent.com/u/2569835'
              width='330' height='330' />
          </CardMedia>
          <CardAction border>
            <a href='https://github.com/coderhaoxin'>goto</a>
          </CardAction>
          <CardMenu>
            <Button icon>
              <Icon type='share' />
            </Button>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

export default CardExample


[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

### react.mdl

### Components

* `DateTimePicker`

  - `Props`
    * See [chmln/flatpickr](https://github.com/chmln/flatpickr)
  - `Example`
  ```jsx
  <DateTimePicker id='datepicker' data-enabletime={true}
    onChange={v => console.info(v)} />
  ```

* `Badge`
  - `Props`
    * className: string
    * background: bool
    * overlap: bool
    * href: string

  - `Example`
  ```jsx
  <Badge data-badge='go'>hello</Badge>
  ```

* `Button`
  - `Props`
    * className: string
    * floating: bool
    * colored: bool
    * primary: bool
    * ripple: bool
    * raised: bool
    * accent: bool
    * icon: bool
    * mini: bool

  - `Example`
  ```jsx
  <Button>button</Button>
  <Button floating={true} primary={true}>floating</Button>
  ```

* `Checkbox`
  - `Props`
    * className: string
    * label: string
    * ripple: bool
    * id: string

  - `Example`
  ```jsx
  <Checkbox label='hello world' />
  ```

* `Progress`
  - `Props`
    * indeterminate: bool,
    * className: string,
    * progress: number,
    * buffer: number,

  - `Example`
  ```jsx
  <Progress progress={progress} buffer={buffer} />
  <Progress indeterminate={true} />
  ```

* `Radio`
  - `Props`
    * className: string,
    * label: string,
    * name: string,
    * ripple: bool,
    * id: string

  - `Example`
  ```jsx
  <Radio label='hello world' />
  ```

* `Slider`
  - `Props`
    * className: string

  - `Example`
  ```jsx
  <Slider min='1' max='10' />
  ```

* `Spinner`
  - `Props`
    * singleColor: bool
    * className: string
    * active: bool

  - `Example`
  ```jsx
  <Spinner active={true} />
  ```

* `Switch`
  - `Props`
    * className: string
    * label: string
    * ripple: bool
    * id: string

  - `Example`
  ```jsx
  <Switch label='hello world' />
  ```

* `Tag`
  - `Props`
    * onClose: func,
    * color: string,
    * name: string,

  - `Example`
  ```jsx
  <Tag name='hello' color='red'
    onClose={() => console.info('close tag')} />
  ```

* `TextField`
  - `Props`
    * className: string,
    * expandable: bool,
    * floating: bool,
    * pattern: string,
    * label: string,
    * error: string

  - `Example`
  ```jsx
  <TextField />
  <TextField label='hello input' floating={true} />
  <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' floating={true} />
  <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' expandable={true} />
  ```

* `Textarea`
  - `Props`
    * className: string
    * label: string
    * id: string

  - `Example`
  ```jsx
  <Textarea rows='4' cols='50' />
  <Textarea rows='4' cols='50' label='hello, textarea' />
  ```

* `Tooltip`
  - `Props`
    * className: string
    * htmlFor: string
    * large: bool

  - `Example`
  ```jsx
  <Tooltip htmlFor='tip'}>tooltip!!!</Tooltip>
  <div id='tip'>hello world</div>
  ```

* `Menu`
  - `Props`
    * direction: string
    * icon: string

  - `Example`
  ```jsx
  <Menu direction='right-bottom'>
    <MenuItem>one</MenuItem>
    <MenuItem>two</MenuItem>
    <MenuItem>
      <a href='#'>hello</a>
    </MenuItem>
  </Menu>

  <Menu direction='top-right' icon='toc'>
    <MenuItem>one</MenuItem>
    <MenuItem>two</MenuItem>
    <MenuItem>
      <a href='#'>hello</a>
    </MenuItem>
  </Menu>
  ```

* `Tabs`
  - `Props`
    * defaultActiveKey: string
    * onTabClick: func

  - `Example`
  ```jsx
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
  ```

* `Table`
  - `Props`
    * dataSource: array.isRequired,
    * columns: array.isRequired,
    * className: string,
    * selectable: bool

  - `Example`
    * basic

  ```jsx
  const dataSource = [{
    name: 'haoxin',
    age: 18,
    address: 'Shanghai'
  }, {
    name: 'luqiang',
    age: 22,
    address: 'Hangzhou'
  }]

  const columns = [{
    title: 'name',
    dataIndex: 'name',
  }, {
    title: 'age',
    dataIndex: 'age',
  }, {
    title: 'address',
    dataIndex: 'address',
    key: 'address'
  }]

  <Table dataSource={dataSource} columns={columns} />
  ```

    * custom `render`
  ```jsx
  const dataSource = [{
    name: 'haoxin',
    age: 18,
    address: 'Shanghai'
  }, {
    name: 'luqiang',
    age: 22,
    address: 'Hangzhou'
  }]

  const columns = [{
    title: 'name',
    dataIndex: 'name',
    render: name => <a href='#'>{name}</a>
  }, {
    title: 'age',
    dataIndex: 'age'
  }, {
    title: 'address',
    dataIndex: 'address',
    render(address, record) {
      return (
        <strong>{address + '. ' + record.name}</strong>
      )
    }
  }]

  <Table dataSource={dataSource} columns={columns} />
  ```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/react.mdl.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react.mdl
[travis-img]: https://img.shields.io/travis/coderhaoxin/react.mdl.svg?style=flat-square
[travis-url]: https://travis-ci.org/coderhaoxin/react.mdl
[codecov-img]: https://img.shields.io/codecov/c/github/coderhaoxin/react.mdl.svg?style=flat-square
[codecov-url]: https://codecov.io/github/coderhaoxin/react.mdl?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/coderhaoxin/react.mdl.svg?style=flat-square
[david-url]: https://david-dm.org/coderhaoxin/react.mdl

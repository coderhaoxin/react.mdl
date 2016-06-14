
### react.mdl

### Components

* `Badge`
  - `Props`
    * className: string
    * background: bool
    * overlap: bool
    * href: string
  - `Example`
  ```js
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
  ```js
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
  ```js
  <Checkbox label='hello world' />
  ```

* `Progress`
  - `Props`
    * indeterminate: bool,
    * className: string,
    * progress: number,
    * buffer: number,
  - `Example`
  ```js
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
  ```js
  <Radio label='hello world' />
  ```

* `Slider`
  - `Props`
    * className: string
  - `Example`
  ```js
  ```

* `Spinner`
  - `Props`
    * singleColor: bool
    * className: string
    * active: bool
  - `Example`
  ```js
  <Spinner active={true} />
  ```

* `Switch`
  - `Props`
    * className: string
    * label: string
    * ripple: bool
    * id: string
  - `Example`
  ```js
  <Switch label='hello world' />
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
  ```js
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
  ```js
  <Textarea rows='4' cols='50' />
  <Textarea rows='4' cols='50' label='hello, textarea' />
  ```

* `Tooltip`
  - `Props`
    * className: string
    * htmlFor: string
    * large: bool
  - `Example`
  ```js
  <Tooltip htmlFor='tip'}>tooltip!!!</Tooltip>
  <div id='tip'>hello world</div>
  ```

### License
MIT

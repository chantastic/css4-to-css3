import React, { Component } from "react";
import postcss from "postcss"
import cssnext from "postcss-cssnext"
import CodeMirror from "react-codemirror"

import "codemirror/lib/codemirror.css"
import "codemirror/mode/css/css"

const processor = (css4, callback) =>
  postcss([cssnext])
    .process(css4)
    .then(
      result => callback(result.css),
      ({message}) => callback(message)
    )

const starterCSS = `:root { --pink: #f3c }

.pink { color: var(--pink) }
`

class App extends Component {
  state = {
    input: starterCSS,
    output: ""
  }

  updateWithCSS =(css4) =>
    processor(css4, css3 =>
      this.setState({
        input: css4,
        output: css3
      })
    )

  componentDidMount() {
    this.updateWithCSS(this.state.input)
  }

  handleChange = (css4) => this.updateWithCSS(css4)

  render() {
    return (
      <Root>
        <Column>
          <Heading>cssnext</Heading>

          <CodeMirror
            onChange={this.handleChange}
            options={{mode: "css", autofocus: true}}
            value={this.state.input}
          />
        </Column>

        <Column>
          <Heading>CSS</Heading>

          <CodeMirror
            value={this.state.output}
            options={{mode: "css", readOnly: true}}
          />
        </Column>
      </Root>
    )
  }
}

// private

const Root = props =>
  <div className="d-f" {...props} />

const Column = props =>
  <div className="f-50vw xw-50vw px-2 brw-1p:fc bc-gray2" {...props} />

const Heading = props =>
  <h4 className="mb-2 fw-900" {...props} />

export default App

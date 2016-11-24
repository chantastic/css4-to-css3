import React, { Component } from "react";
import postcss from "postcss"
import cssnext from "postcss-cssnext"
import CodeMirror from "react-codemirror"

require('codemirror/lib/codemirror.css')
require('codemirror/mode/css/css');

const processor = (css4, callback) =>
  postcss([cssnext])
    .process(css4)
    .then(result => callback(result.css))

const starterCSS = `
:root { --pink: #f3c }

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
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h4>CSS4</h4>
          <CodeMirror
            onChange={this.handleChange}
            options={{mode: "css"}}
            value={this.state.input}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h4>CSS3</h4>
          <CodeMirror
            value={this.state.output}
            options={{
              mode: "css",
              readOnly: true,
            }}
          />
      </div>
      </div>
    )
  }
}

export default App

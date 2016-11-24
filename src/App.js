import React, { Component } from "react";
import postcss from "postcss"
import cssnext from "postcss-cssnext"

const processor = (css4, callback) =>
  postcss([cssnext])
    .process(css4)
    .then(result => callback(result.css))

class App extends Component {
  state = {
    output: ""
  }

  handleChange = (e) =>
    processor(e.target.value, css3 =>
      this.setState({output: css3})
    )

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} />

        <pre>
          <code>
            {this.state.output}
          </code>
        </pre>
      </div>
    )
  }
}

export default App

import React, { Component } from "react";

class App extends Component {
  state = {
    output: ""
  }

  handleChange = (e) =>
    this.setState({
      output: e.target.value
    })

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
        />
        <pre>
          <code>
            {this.state.output}
          </code>
        </pre>
      </div>
    )
  }
}

export default App;

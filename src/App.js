import React, { Component } from "react";
import postcss from "postcss"
import cssnext from "postcss-cssnext"
import CodeMirror from "react-codemirror"

import "codemirror/lib/codemirror.css"
import "codemirror/mode/css/css"
import "select.css/select.css"

import * as samples from "./samples"

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

  appendSample = ({target: {value}}) =>
    this.updateWithCSS(this.state.input + samples[value])

  render() {
    return (
      <Root>
        <Column>
          <Heading>cssnext</Heading>

          <CodeMirror
            onChange={this.handleChange}
            options={{mode: "css", autofocus: true}}
            preserveScrollPosition={true}
            value={this.state.input}
          />
          <select
            className="select"
            onChange={this.appendSample}
            style={{width: "100%", marginBottom: "1rem"}}
            value=""
          >
            <option value="">Insert Sample...</option>
            <option value="customPropertyVar">Custom property (var)</option>
            <option value="customPropertyApply">Custom property (@apply)</option>
            <option value="reducedCalc">Reduced calc()</option>
            <option value="customMediaQuery">Custom media query</option>
            <option value="mediaQueryRange">Media query range</option>
            <option value="customSelector">Custom selector</option>
            <option value="nesting">Nesting</option>
            <option value="colorFunction">color() function</option>
            <option value="hwbFunction">hwb() function</option>
            <option value="grayFunction">gray() function</option>
            <option value="rrggbbaaColors">#rrggbbaa colors</option>
            <option value="filterProperty">filter property</option>
            <option value="anyLinkPseudoClass">:any-link psuedo-class</option>
            <option value="matchesPseudoClass">:matches psuedo-class</option>
            <option value="notPseudoClass">:not psuedo-class</option>
          </select>
        </Column>

        <Column>
          <Heading>CSS</Heading>

          <CodeMirror
            value={this.state.output}
            options={{mode: "css", readOnly: true}}
            preserveScrollPosition={true}
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

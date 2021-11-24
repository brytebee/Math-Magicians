import { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

/* eslint-disable react/prefer-stateless-function */
class Calculator extends Component {
  /* eslint-enable react/prefer-stateless-function */

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    const buttonName = e.currentTarget.textContent.trim();
    const obj = this.state;
    this.setState(calculate(obj, buttonName));
    console.log(this.state);
  }

  render() {
    const { state } = this;
    const { total } = state;
    return (
      <div className="container">
        <div className="button result">
          <p className="result-text">{total || 0}</p>
        </div>
        <div className="first-row d-flex">
          <button
            className="button flex-child"
            data-id="AC"
            type="button"
            buttonName="AC"
            onClick={this.clickHandler.bind(this)}
          >
            AC
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="+/-"
            onClick={this.clickHandler.bind(this)}
          >
            +/-
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="%"
            onClick={this.clickHandler.bind(this)}
          >
            %
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="÷"
            onClick={this.clickHandler.bind(this)}
          >
            &#247;
          </button>
        </div>
        <div className="second-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="7"
            onClick={this.clickHandler.bind(this)}
          >
            7
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="8"
            onClick={this.clickHandler.bind(this)}
          >
            8
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="9"
            onClick={this.clickHandler.bind(this)}
          >
            9
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="*"
            onClick={this.clickHandler.bind(this)}
          >
            x
          </button>
        </div>
        <div className="third-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="4"
            onClick={this.clickHandler.bind(this)}
          >
            4
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="5"
            onClick={this.clickHandler.bind(this)}
          >
            5
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="6"
            onClick={this.clickHandler.bind(this)}
          >
            6
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="-"
            onClick={this.clickHandler.bind(this)}
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <div className="fourth-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="1"
            onClick={this.clickHandler.bind(this)}
          >
            1
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="2"
            onClick={this.clickHandler.bind(this)}
          >
            2
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="3"
            onClick={this.clickHandler.bind(this)}
          >
            3
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="+"
            onClick={this.clickHandler.bind(this)}
          >
            {' '}
            +
            {' '}
          </button>
        </div>
        <div className="fifth-row d-flex">
          <button
            className="button big-child"
            data-id=""
            type="button"
            buttonName="0"
            onClick={this.clickHandler.bind(this)}
          >
            0
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            buttonName="."
          >
            {' '}
            .
            {' '}
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            buttonName="="
            onClick={this.clickHandler.bind(this)}
          >
            {' '}
            =
            {' '}
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;

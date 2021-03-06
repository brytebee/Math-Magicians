import '../App.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const buttonName = e.currentTarget.textContent.trim();
    setState(calculate(obj, buttonName));
  };

  const font = {
    fontSize: '1.5rem',
  };

  return (
    <div className="main d-flex">
      <p style={font}>Let us do some math</p>
      <div className="container">
        <div className="button result" data-id="display">
          <p className="result-text">
            {obj.next || obj.operation || obj.total || 0}
          </p>
        </div>
        <div className="first-row d-flex">
          <button
            className="button flex-child"
            data-id="AC"
            type="button"
            onClick={clickHandler}
          >
            AC
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            +/-
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            %
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            &#247;
          </button>
        </div>
        <div className="second-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            7
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            8
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            9
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            x
          </button>
        </div>
        <div className="third-row d-flex">
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            4
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            5
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            6
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            onClick={clickHandler}
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
            onClick={clickHandler}
          >
            1
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            2
          </button>
          <button
            className="button flex-child"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            3
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            onClick={clickHandler}
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
            onClick={clickHandler}
          >
            0
          </button>
          <button className="button flex-child" data-id="" type="button">
            {' '}
            .
            {' '}
          </button>
          <button
            className="button flex-child operator"
            data-id=""
            type="button"
            onClick={clickHandler}
          >
            {' '}
            =
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

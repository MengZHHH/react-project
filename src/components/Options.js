import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
      <div>
        <ol>
        {
          props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
          ))
        }
      </ol>
      <button onClick={props.handleDeleteOptions}>Remove All!</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      </div>
    )
  }
export default Options;
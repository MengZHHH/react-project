import React from 'react';

const Option = (props) => (
      <div>
        Option: {props.optionText}
        <button 
          onClick={() => {
            props.handleDeleteOption(props.optionText)
          }}
        >
          Remove
        </button>
      </div>
    );

export default Option;
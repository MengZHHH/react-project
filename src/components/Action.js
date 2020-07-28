import React from 'react';

  const Action = (props) => (
      <div>
        <button 
          onClick={props.handlePick}
        >
          What should I do?
        </button>
      </div>
    )
export default Action;
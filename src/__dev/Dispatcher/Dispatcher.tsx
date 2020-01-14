import React from 'react';

import '__dev/index.css';

const Dispatcher = () => {
  return (
    <div style={{margin: 10, padding: 10, border: 'solid 1px #d5d5d5'}}>
      <h2>Dispatcher</h2>
      <ul style={{listStyleType: 'none'}}>
        <li><button>Dispatch: ?something?</button></li>
      </ul>
    </div>
  )
}

export default Dispatcher;

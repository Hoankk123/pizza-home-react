import React from 'react';

// Leaf component: a simple text display.
// Takes as a prop the text to display.
function Title({ text }) {
  return <h3 className="card-title">{text}</h3>;
}

export default Title;

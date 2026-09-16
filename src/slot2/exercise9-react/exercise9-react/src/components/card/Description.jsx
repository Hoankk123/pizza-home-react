import React from 'react';

// Leaf component: another simple text display.
// Takes as a prop the text to display.
function Description({ text }) {
  return <p className="card-description">{text}</p>;
}

export default Description;

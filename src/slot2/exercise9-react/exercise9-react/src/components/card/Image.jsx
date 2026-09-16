import React from 'react';

// Leaf component: a single image.
// Takes as a prop the url of the image.
function Image({ url }) {
  return (
    <div className="card-image">
      {url ? <img src={url} alt="" /> : <span>IMG</span>}
    </div>
  );
}

export default Image;

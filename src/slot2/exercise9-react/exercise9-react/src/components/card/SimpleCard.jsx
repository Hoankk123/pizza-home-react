import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';

// Wrapper component. Takes "item" as a prop.
// item = { title: string, description: string, imageUrl: string }
function SimpleCard({ item }) {
  return (
    <div className="simple-card">
      <Image url={item.imageUrl} />
      <div className="simple-card-body">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}

export default SimpleCard;

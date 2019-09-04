import React, { Fragment } from 'react';

const SomeListComponent = ({ items = [], listDetails = {}, onClick }) => {
  const { size } = listDetails;
  const listStyles = { backgroundColor: 'red', height: size.height || 100, width: size.width || 100, listStyle: 'none' };
  const listItemStyles = { padding: 20 };

  return (
    <Fragment>
      <ul style={listStyles}>
        {items.map((item, i) => (
          <li onClick={() => onClick(i)} key={item.text} style={listItemStyles}>
            {item.text}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default SomeListComponent;

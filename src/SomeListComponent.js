import React, { Fragment } from 'react';

const SomeListComponent = ({ items = [], listDetails = {}, onClick }) => {
  const { size } = listDetails;
  const listHeight = size && size.height;
  const listWidth = size && size.width;
  const listStyles = { backgroundColor: 'red', height: listHeight || 100, width: listWidth || 100, listStyle: 'none' };
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

import React from 'react'

const List = (props) => {
  const { items, type, decoration } = props;

  const listItems = items.map((item) => {
    if (decoration) {
      return <li style={{ color: 'red' }}>{item}</li>;
    }

    return <li>{item}</li>;
  });

  if (type === 'number') {
    return <ol>
      {listItems}
    </ol>;
  }

  return <ul>
    {listItems}
  </ul>;
};

export default List;
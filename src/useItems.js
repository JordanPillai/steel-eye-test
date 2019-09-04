import { useState, useEffect } from 'react';

const useItems = initalItems => {
  const [items, setItems] = useState(initalItems);

  useEffect(() => {
    setItems(items);
  }, [items]);

  return items;
};

export default useItems;

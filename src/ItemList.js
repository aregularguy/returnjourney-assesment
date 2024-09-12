// src/ItemList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectSearchTerm } from './itemSlice';
import Item from './Item';

const ItemList = () => {
  const items = useSelector(selectItems);
  const searchTerm = useSelector(selectSearchTerm);

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
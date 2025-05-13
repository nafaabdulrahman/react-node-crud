import React, { useState } from 'react';

function ItemList({ items, onEdit, onDelete }) {
  const [visibleDescriptionId, setVisibleDescriptionId] = useState(null);

  const toggleDescription = (id) => {
    setVisibleDescriptionId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '5px' }}>
          <h4>{item.name}</h4>

          <button onClick={() => toggleDescription(item._id)}>
            {visibleDescriptionId === item._id ? 'Hide' : 'View'}
          </button>
          <button onClick={() => onEdit(item)} style={{ marginLeft: '5px' }}>Edit</button>
          <button onClick={() => onDelete(item._id)} style={{ marginLeft: '5px' }}>Delete</button>

          {visibleDescriptionId === item._id && (
            <p style={{ marginTop: '10px' }}><strong>Description:</strong> {item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;

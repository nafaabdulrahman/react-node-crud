import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const API_URL = 'http://localhost:5000/api/items';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get(API_URL);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    await axios.post(API_URL, item);
    fetchItems();
  };

  const updateItem = async (id, updatedItem) => {
    await axios.put(`${API_URL}/${id}`, updatedItem);
    setEditingItem(null);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchItems();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>CRUD App</h2>
      <ItemForm onSubmit={editingItem ? updateItem : addItem} editingItem={editingItem} />
      <ItemList items={items} onEdit={setEditingItem} onDelete={deleteItem} />
    </div>
  );
}

export default App;
// This code is a simple CRUD application built with React and Axios.
// It allows users to create, read, update, and delete items.
// The application consists of two main components: ItemForm and ItemList.
// The ItemForm component is used for adding and editing items.
// The ItemList component displays the list of items and provides options to edit or delete each item.
// The App component manages the state of the application, including the list of items and the currently editing item.
// It also handles the API calls to fetch, add, update, and delete items from the server.
// The application uses Axios for making HTTP requests to a RESTful API.
// The API_URL constant defines the base URL for the API. 
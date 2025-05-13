import React, { useState, useEffect } from 'react';

function ItemForm({ onSubmit, editingItem }) {
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      onSubmit(editingItem._id, form);
    } else {
      onSubmit(form);
    }
    setForm({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
}

export default ItemForm;

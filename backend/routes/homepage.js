// routes/homepage.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all homepage items
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM homepage');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single homepage item by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM homepage WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new homepage item
router.post('/', async (req, res) => {
  const { title, image_link } = req.body;

  if (!title || !image_link) {
    return res.status(400).json({ error: 'Title and image_link are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO homepage (title, image_link) VALUES (?, ?)',
      [title, image_link]
    );

    const [newItem] = await db.query('SELECT * FROM homepage WHERE id = ?', [result.insertId]);
    res.status(201).json(newItem[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a homepage item
router.put('/:id', async (req, res) => {
  const { title, image_link } = req.body;

  if (!title || !image_link) {
    return res.status(400).json({ error: 'Title and image_link are required' });
  }

  try {
    const [result] = await db.query(
      'UPDATE homepage SET title = ?, image_link = ? WHERE id = ?',
      [title, image_link, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const [updatedItem] = await db.query('SELECT * FROM homepage WHERE id = ?', [req.params.id]);
    res.json(updatedItem[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a homepage item
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM homepage WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

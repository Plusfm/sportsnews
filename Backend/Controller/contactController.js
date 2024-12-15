const Contact = require('../Model/contactModel')


exports.contactpost= async (req, res) => {
    try {
      console.log('Request body:', req.body);
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'Failed to save contact message' });
    }
  };
const express = require('express');
const multer = require('multer');
const { Theses } = require('../models');
const { Op } = require('sequelize');
const router = express.Router();
const pdf = require('pdf-parse');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// uploading pdfs
router.post('/', upload.single('file'), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { buffer } = req.file;
    
    const data = await pdf(buffer);
    const pdfText = data.text;

    const pdfLines = pdfText.split('\n').map(line => line.trim()); // Split and trim lines
    const limitedLines = pdfLines.slice(0, 4); // Take the first 5 lines
    const title = limitedLines.join('\n');

    const thesis = await Theses.create({
      filename: req.file.originalname,
      title: title,  // Save the extracted title in the database
      pdfData: req.file.buffer
    });

    res.status(201).json({ message: 'File uploaded successfully', id: thesis.id });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
});

// getting all pdfs
router.get('/pdfs', async (req, res) => {
  const searchQuery = req.query.q || '';
  try {
    const theses = await Theses.findAll({
      where: {
        [Op.or]: [
          { filename: { [Op.like]: `%${searchQuery}%` } },
          { title: { [Op.like]: `%${searchQuery}%` } }
        ],
        pdfData: {
          [Op.ne]: null,
        },
      },
      attributes: ['id', 'filename', 'title'],
    });

    res.json(theses);
  } catch (error) {
    console.error('Error fetching theses with PDFs', error);
    res.status(500).json({ error: 'Failed to fetch theses with PDFs' });
  }
});

// gwet a specific pdf
router.get('/download/:filename', async (req, res) => {
  try {
    const thesis = await Theses.findOne({ where: { filename: req.params.filename } });

    if (!thesis) {
      return res.status(404).json({ error: 'Thesis not found' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${thesis.filename}"`);
    res.send(thesis.pdfData);
  } catch (error) {
    console.error('Error fetching thesis for download:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// router.get('/:thesisId', async (req, res) => {
//   try {
//     const thesis = await Theses.findByPk(req.params.thesisId);

//     if (!thesis) {
//       return res.status(404).json({ error: 'Thesis not found' });
//     }

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `inline; filename="${thesis.filename}"`);
//     res.send(thesis.pdfData);
//   } catch (error) {
//     console.error('Error fetching thesis:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = router;
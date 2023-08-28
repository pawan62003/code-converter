// app.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

app.use(express.json());

app.post('/convert', async (req, res) => {
  const { sourceCode, targetLanguage } = req.body;

  try {
    const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        code: sourceCode,
        target_language: targetLanguage,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const convertedCode = response?.data?.convertedCode || '';

    res.json({ convertedCode });
  } catch (err) {
    res.status(500).json({ error: 'Code conversion failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/funfact', async (req, res) => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    res.json({ message: data.slip.advice });
  } catch (error) {
    console.error("Failed to fetch advice:", error);
    res.status(500).json({ message: "Could not fetch advice" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

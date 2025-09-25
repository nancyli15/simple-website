const express = require('express'); 
const cors = require('cors');       
const fetch = require('node-fetch'); 

const app = express();            
const PORT = 3000;                

app.use(cors());

// Define a GET route for /api/funfact
app.get('/api/funfact', async (req, res) => {
  try {
    // Fetch a random advice from the Advice Slip API
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    // Send the advice as JSON back to the frontend
    res.json({ message: data.slip.advice });

  } catch (error) {
    // Handle errors (e.g., if the API call fails)
    console.error("Failed to fetch advice:", error);
    res.status(500).json({ message: "Could not fetch advice" });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`); // running 'npm start' in terminal should trigger this message
});

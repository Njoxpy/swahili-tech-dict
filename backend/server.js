// server.js (Backend with Express)
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Example API route
app.get("/", (req, res) => {
  res.send([{ term: "API", definition: "Application Programming Interface" }]);
});

// server.js continued
let terms = [
  {
    id: 1,
    term: "Kishikwambi",
    definition:
      "Kifaa kinachotumika kwa ajili ya mawasiliano ya watu klati ya mtu mmoja na mwingine na ni rahisi sana ila kizito!",
  },
  {
    id: 2,
    term: "GitHub",
    definition:
      "A platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
  },
  // Add more terms as needed
];

// GET /api/terms: Retrieve a list of terms. Optionally include query parameters for filtering or searching.
app.get("/api/terms", (req, res) => {
  res.json(terms);
});

// GET /api/terms/{id}: Retrieve details for a specific term.
app.get("/api/terms/:id", (req, res) => {
  const term = terms.find((t) => t.id === parseInt(req.params.id));
  if (!term) return res.status(404).send("Term not found");
  res.json(term);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

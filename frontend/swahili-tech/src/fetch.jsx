import axios from "axios";
import { useState, useEffect } from "react";

function TermsAvailable() {
  const [terms, setTerms] = useState([]);
  const [error, setError] = useState(null);
  const URL = "http://localhost:5000/terms";

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchTerms = async () => {
      try {
        const response = await axios.get(URL);
        setTerms(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {terms.map((term, index) => (
          <li key={index}>
            <strong>{term.term}</strong>: {term.definition} (Usage: {term.usage}
            , Synonyms: {term.synonms})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TermsAvailable;

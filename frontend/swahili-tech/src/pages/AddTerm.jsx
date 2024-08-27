import { useState } from "react";
import "../styles/addTerm.css";

function AddTerm() {
  const [form, setForm] = useState({
    term: "",
    definition: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  // making post request to submit new term

  return (
    <div className="add-term-from">
      <form action="" className="add" onSubmit={handleSubmit}>
        <h3>Add New Term</h3>
        <label htmlFor="term" className="term-label">
          Term
        </label>
        <input
          type="text"
          name="term"
          id="term"
          required
          placeholder="Enter New Term"
          className="term-input"
          autoFocus
          value={form.term}
          onChange={(e) => {
            setForm({
              ...form,
              term: e.target.value,
            });
          }}
        />

        <label htmlFor="definition" className="definition-label">
          Definition
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          value={form.definition}
          onChange={(e) => {
            setForm({
              ...form,
              definition: e.target.value,
            });
          }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddTerm;

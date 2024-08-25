import "../styles/addTerm.css";

function AddTerm() {
  return (
    <div className="add-term-from">
      <form action="" className="add">
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
        />

        <label htmlFor="definition" className="definition-label">
          Definition
        </label>
        <input
          type="text"
          name="definition"
          id="definition"
          required
          className="definition-input"
          placeholder="Enter Term Definition"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddTerm;

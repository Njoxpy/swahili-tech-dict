import { useState } from "react";

function PopularSearch() {
  const [blogs, setBlogs] = useState([
    {
      word: "kishikwambi",
      meaning: "kifaa kinachotumika kwa ajili ya mawasalianao",
    },
    {
      word: "kikokotoo",
      meaning: "kifaa kinachotumika kwa ajili ya kufanya ujumlishaji wa hesabu",
    },
  ]);
  return (
    <div className="trending-home">
      <h3>Popular Search</h3>
      <div className="term-wall">
        <h4 className="term-heading-trending">Kishikwambi</h4>
        <p className="term-paragraph">
          Kifaa kinachotumika kwa ajili ya mawasiliano ya watu klati ya mtu
          mmoja na mwingine na ni rahisi sana ila kizito!
        </p>

        <h4 className="term-heading-trending">Kishikwambi</h4>
        <p className="term-paragraph">
          Kifaa kinachotumika kwa ajili ya mawasiliano ya watu klati ya mtu
          mmoja na mwingine na ni rahisi sana ila kizito!
        </p>

        <h4 className="term-heading-trending">Kishikwambi</h4>
        <p className="term-paragraph">
          Kifaa kinachotumika kwa ajili ya mawasiliano ya watu klati ya mtu
          mmoja na mwingine na ni rahisi sana ila kizito!
        </p>
      </div>
    </div>
  );
}

export default PopularSearch;

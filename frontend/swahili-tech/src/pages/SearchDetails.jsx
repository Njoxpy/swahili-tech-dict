import { useParams } from "react-router-dom";

function SearchDetails() {
  const { term } = useParams();
  return (
    <div>
      <h3>search details</h3>
      <p>id of the term is {term}</p>
      <div className="search-details">
        <div>
          <h3>Searched word</h3>
          <div className="synonym">
            <h4>Synonym</h4>
            <ol>
              <li>synonym 1</li>
              <li>synonym 2</li>
            </ol>
          </div>
          <div className="anonym">
            <h4>Synonym</h4>
            <ol>
              <li>anonym 1</li>
              <li>anonym 2</li>
            </ol>
          </div>
        </div>
        <div className="term-definition">
          <p className="term-definition-long">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
            rerum velit! Voluptatibus modi corporis odio harum et! Eaque hic
            minima, adipisci debitis odit itaque? Veritatis esse fuga quod
            distinctio?
          </p>
          <p>
            <small>terms usage in real world examples</small>
          </p>
        </div>
      </div>
      <div className="term-audio-pronounication">
        <audio src="">
            audio
        </audio>
      </div>
    </div>
  );
}

export default SearchDetails;

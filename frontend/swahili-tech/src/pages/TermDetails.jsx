import { useParams } from "react-router-dom";

function TermsDetails() {
  const { id } = useParams();
  return (
    <div>
      <h3>Term details</h3>
      <p>id of the term is {id}</p>
    </div>
  );
}

export default TermsDetails;

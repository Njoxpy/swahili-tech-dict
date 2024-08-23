import { useRouteError } from "react-router-dom";

function SearchDetailsError() {
  const error = useRouteError();
  return (
    <div>
      <h1>no detail for search term</h1>
      <p>{error.message}</p>
    </div>
  );
}
export default SearchDetailsError;

import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error=useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Error Page</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <NavLink to="/">
        <button>
           Go to Home
        </button>
      </NavLink>
    </div>
  );
  
}

export default ErrorPage;
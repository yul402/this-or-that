// vv necessary imports to link data from db vv
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import { useQuery } from "@apollo/client";
// vv imports gql data from queries.js vv
import { QUERY_CHOICES } from "../../utils/queries";

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_CHOICES, {
    fetchPolicy: "no-cache",
  });

  {
    /* Create variable for survey data from QUERY_CHOICES here */
  }

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>This or That!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Choose your survey:</h2>
        {/* Survey Data / Titles here */}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Create your Survey now!</h2>
        {Auth.loggedIn() && (
          <Link to="/create">
            <button className="btn btn-lg btn-danger">Create a Survey</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Homepage;

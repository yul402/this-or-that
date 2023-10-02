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

  
const choiceList = data?.survey|| [];
 
  return (
    <div className="container mt-5">
    <div className="card bg-white card-rounded">
      <div className="card-header text-center">
        <h1>This or That!</h1>
      </div>
      <div className="card-body m-5 text-center">
        <h2>Choose your survey:</h2>
        {loading ? (
          <div>Loading...</div>
        ): (<ul className="square">
        {choiceList.map((choice) => {
          return (
            <li key={choice._id}>
              <Link to={{ pathname: `/survey/${choice._id}` }}>
                {choice.title}
              </Link>
            </li>
          );
        })}
      </ul>
    )}
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
    </div>
  );
};

export default Homepage;

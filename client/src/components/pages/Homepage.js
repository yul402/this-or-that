// vv necessary imports to link data from db vv
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import { useQuery,useMutation } from "@apollo/client";
// vv imports gql data from queries.js vv
import { QUERY_CHOICES } from "../../utils/queries";
import { DELETE_SURVEY } from "../../utils/mutations";
import HomepageSurveyRender from '../HomePageSurveyRender'


const Homepage = () => {
  const { loading, data } = useQuery(QUERY_CHOICES, {
    fetchPolicy: "no-cache",
  });
  
  const choiceList = data?.survey|| [];

  const [deleteSurvey, { error }] = useMutation(DELETE_SURVEY);
  
  return (
    <div className="container mt-5">
    <div className="card bg-white card-rounded">
      <div className="card-header text-center">
        <h1>Choose your survey below!</h1>
      </div>
      <div className="card-body m-5 text-center">
        {loading ? (
          <div>Loading...</div>
        ): (<ul className="square">
        {choiceList.map((choice) => 
          {
          return (
            <ul  key={choice._id}>
              <HomepageSurveyRender id={choice._id} title={choice.title} />
            </ul>
          );
        })}
      </ul>
    )}
      </div>
      <div className="card-footer text-center m-3">
        <h4>Please Log In to create a Survey!</h4>
        {Auth.loggedIn() && (
          <div>
          <Link to="/create">
            <button className="btn btn-lg btn-danger">Create a Survey</button>
          </Link>
          </div>
        )}

      </div>
    </div>
    </div>
  );
};

export default Homepage;

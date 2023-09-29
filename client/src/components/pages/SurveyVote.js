import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_SURVEY } from '../../utils/queries';
import { UPDATE_VOTE } from '../../utils/mutations';


const SurveyVote = () => {
    // Query a specific survey's information with id 
    let { id } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_SURVEY, {
      variables: { _id: id },
    });

    // Store returned data into variables
    const singleSurvey = data?.singleSurvey || [];
  
    // Update vote data if user click on vote button
    const [updateVote, { error }] = useMutation(UPDATE_VOTE);
    const handleVote = async (choiceNum) => {
      try {
        await updateVote({
          variables: { _id: id, choiceNum: choiceNum },
        });
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-white card-rounded w-50">
          <div className="card-header bg-black text-center">
            <h1 style = {{color:"white"}}>Here is the Survey!</h1>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="card-body text-center mt-3">
              <h1>Title:{singleSurvey[0].title}</h1>
              <div className="card bg-white card-rounded m-3">
                <p style={{fontSize: "25px"}}>Description: {singleSurvey[0].description}</p>
              </div>
              <div className="card bg-white card-rounded m-3">
                <h2>Vote here:</h2>
                <h2>
                  {singleSurvey[0].choice1} vs. {singleSurvey[0].choice2}
                </h2>
                <h3 style={{fontStyle: "italic", color: "grey"}}>
                {singleSurvey[0].choice1_votes} : {singleSurvey[0].choice2_votes}
                </h3>
              </div>
              <button className="btn btn-info" onClick={() => handleVote(1)}>
                Vote for {singleSurvey[0].choice1}
              </button>{' '}
              <button className="btn btn-info" onClick={() => handleVote(2)}>
                Vote for {singleSurvey[0].choice2}
              </button>
              <div className="card-footer text-center m-3">
                <br></br>
                <Link to="/">
                  <button className="btn btn-lg btn-danger">
                    View all surveys
                  </button>
                </Link>
              </div>
            </div>
          )}
          {error && <div>Something went wrong...</div>}
        </div>
      </div>

    );
    
};

export default SurveyVote;

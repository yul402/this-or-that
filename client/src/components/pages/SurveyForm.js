import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
import { CREATE_SURVEY } from '../../utils/mutations';

const SurveyForm = () => {
  // // const { loading, data } = useQuery(QUERY_TECH);

  // // const techList = data?.tech || [];

  const [formData, setFormData] = useState({});
  // let navigate = useNavigate();

  const [createSurvey, { error }] = useMutation(CREATE_SURVEY);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formData)

    try {
      const { data } = await createSurvey({
        variables: { ...formData },
      });

      // navigate(`/survey/${data.createSurvey._id}`);
    } catch (err) {
      console.error(err);
    }

    // setFormData({
    //   tech1: 'JavaScript',
    //   tech2: 'JavaScript',
    // });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a survey!</h1>
      </div>
      <div className="card-body m-5">
        {/* {loading ? (
          <div>Loading...</div>
        ) : ( */}
          <form onSubmit={handleFormSubmit}>
          {/* <form> */}
            <label>Title:</label>
            <input
              // value={userInfo.username}
              name="title"
              onChange={handleInputChange}
              // onBlur={validateField}
              type="text"
              placeholder="title"
              // className = {errorMessage.username ? 'error' : '' }
            />

            <label>Choice 1:</label>
            <input
              // value={userInfo.username}
              name="choice1"
              onChange={handleInputChange}
              // onBlur={validateField}
              type="text"
              placeholder="choice1"
              // className = {errorMessage.username ? 'error' : '' }
            />

            <label>choice 2:</label>
            <input
              // value={userInfo.username}
              name="choice2"
              onChange={handleInputChange}
              // onBlur={validateField}
              type="text"
              placeholder="choice2"
              // className = {errorMessage.username ? 'error' : '' }
            />

            <label>Description:</label>
            <input
              // value={userInfo.username}
              name="description"
              onChange={handleInputChange}
              // onBlur={validateField}
              type="text"
              placeholder="description"
              // className = {errorMessage.username ? 'error' : '' }
            />
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        {/* )} */}
      </div>
      {/* {error && <div>Something went wrong...</div>} */}
    </div>
  );
};

export default SurveyForm;

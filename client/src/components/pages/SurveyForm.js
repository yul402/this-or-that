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
    <div className="d-flex justify-content-center">
      <div className="card bg-white card-rounded w-25">
        <div className="card-header text-center">
            <h1>Let's create a survey!</h1>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group p-4">
              <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  onChange={handleInputChange}
                  // onBlur={validateField}
                  type="text"
                  placeholder="title"
                  // className = {errorMessage.username ? 'error' : '' }
                />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group p-4">
              <label>Choice 1</label>
              <input
                className="form-control"
                name="choice1"
                onChange={handleInputChange}
                // onBlur={validateField}
                type="text"
                placeholder="choice1"
                // className = {errorMessage.username ? 'error' : '' }
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group p-4">
              <label>choice 2</label>
              <input
                className="form-control"
                name="choice2"
                onChange={handleInputChange}
                // onBlur={validateField}
                type="text"
                placeholder="choice2"
                // className = {errorMessage.username ? 'error' : '' }
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group p-4">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                onChange={handleInputChange}
                // onBlur={validateField}
                type="text"
                placeholder="description"
                row="5"
                // className = {errorMessage.username ? 'error' : '' }
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger p-2 m-2" type="submit">
                Create Survey!
              </button>
            </div>
          </form>
      </div>
        {/* {error && <div>Something went wrong...</div>} */}
    </div>
  </div>
  );
};

export default SurveyForm;

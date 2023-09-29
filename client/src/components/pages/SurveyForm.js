import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_SURVEY } from '../../utils/mutations';

const SurveyForm = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();
  const [createSurvey, { error }] = useMutation(CREATE_SURVEY);

  // Update formData object if user change the form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message if all fields are entered
    if(Object.keys(formData).length === 4){
      setErrorMessage("")
    }
  };


  // Submit all filled-in values into mongodb
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Set error message if not all fields are entered
    if(Object.keys(formData).length < 4){
      setErrorMessage("Please fill in all four fields.")
    }

    try {
      // create a survey
      const { data } = await createSurvey({
        variables: { ...formData },
      });
      // navigate to created survey page
      navigate(`/survey/${data.createSurvey._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-white card-rounded w-25">
        <div className="card-header bg-black text-center">
            <h1 style = {{color:"white"}}>Let's create a survey!</h1>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group p-4">
              <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="title"
                />
              <small id="title-helptext" className="form-text text-muted">Please enter the title of your survey.</small>
            </div>

            <div className="form-group p-4">
              <label>Choice 1</label>
              <input
                className="form-control"
                name="choice1"
                onChange={handleInputChange}
                type="text"
                placeholder="choice1"
              />
              <small id="choice1-helptext" className="form-text text-muted">Please eneter first choice.</small>
            </div>

            <div className="form-group p-4">
              <label>Choice 2</label>
              <input
                className="form-control"
                name="choice2"
                onChange={handleInputChange}
                type="text"
                placeholder="choice2"
              />
              <small id="choice2-help-text" className="form-text text-muted">Please eneter the second choice.</small>
            </div>

            <div className="form-group p-4">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                onChange={handleInputChange}
                type="text"
                placeholder="description"
                row="5"
              />
              <small id="description-help-text" className="form-text text-muted">Please enter the description for your survey.</small>
            </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger p-2 m-2" type="submit">
                  Create Survey!
                </button>
              </div>
          </form>
      </div>
        {errorMessage}
        {error && <div>Something went wrong...</div>}
    </div>
  </div>
  );
};

export default SurveyForm;

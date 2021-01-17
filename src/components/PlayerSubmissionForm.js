import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const newFields = {
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: ''
  };

  const [fields, setFields] = useState (newFields);

  const onFormChange = (event) => {
    const newFormFields = {
      ...fields
    }

    newFormFields[event.target.name] = event.target.value;
    setFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.sendSubmission(fields);

    setFields(newFields);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

         <div className="PlayerSubmissionForm__poem-inputs">
          {
            props.fields.map((field, i) => {
              if (field.key) {
                return(
                  <input 
                    key={field.key}
                    name={field.key}
                    placeholder={field.placeholder}
                    onChange={onFormChange}
                    value={fields[field.key] || ''}
                    type='text'
                  />)
              } else {
                return field;
              }
            })
          }

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
          type="submit" 
          value="Submit Line" 
          className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;

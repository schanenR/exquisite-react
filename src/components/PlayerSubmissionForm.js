import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const[fields, setFields] = useState ({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

  const onFormChange = (event) => {
    const newFormFields = {
      ...fields
    };

    newFormFields[event.target.name] = event.target.value;
    setFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.sendSubmission(fields);

    setFields({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          
          <label>The</label>
          <input placeholder="adjective" type="text" />
          <input placeholder="noun" type="text" />
          <input placeholder="adverb" type="text" />
          <input placeholder="verb" type="text" />
          <label>the</label>
          <input placeholder="adjactive" type="text" />
          <input placeholder="noun" type="text" />
          <label>.</label>
     
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
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

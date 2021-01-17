import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onSubmission = (event) => {
    event.preventDefault();
    props.revealPoem();
  };

  if (props.isSubmitted) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {props.submissions.map((submission, i) => (
              <p key={i}>The {submission.adj1} {submission.noun1} {submission.adv} {submission.verb} the {submission.adj2} {submission.noun2}.</p>
              ))}
        </section>
      </div>
    )
  } else {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input 
          onClick={onSubmission}
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" />
      </div>     
    )
  };
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;

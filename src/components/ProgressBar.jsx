import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


const ProgressBar = ({ skill, value }) => {
  return (
    <div className="progress">
      <span className="skill">{skill} <i className="val">{value}%</i></span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
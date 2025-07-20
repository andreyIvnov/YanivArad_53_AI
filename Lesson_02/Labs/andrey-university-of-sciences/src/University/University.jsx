
//This component (University.jsx) show the Students.jsx component.
//Add useing the syles from Universuty.css\
//Use the all styles seted o n the University.css file.

import React from 'react';
import Student from '../Studens/Students.jsx';
import './University.css';

const University = () => {
  return (
    <div className="university">
      <h1>University of Sciences</h1>
      <Student />
    </div>
  );
}


export default University;

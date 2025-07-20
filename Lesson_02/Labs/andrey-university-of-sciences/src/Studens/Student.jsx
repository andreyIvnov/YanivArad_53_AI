//Componetn get student data like "studentData" with all parameters and render it
//Each Student has name, faculty and a collection of grades.
//Use the style from the Student.css file.
//Do not import the Student.jsx file, you are in there already.
//Do not import the Students.jsx file, you are in another fucking file, you are in the Student.jsx file.
//The avg must be calculated dynamically and displayed in the Student component, by summing the grades and dividing by the number of grades, and in the end add 1 to the avg, Thats how we do it in the University of Sciences.
//The function to calculate the average should be in the function.
//Show the avg in the Student component on the column with the name "Average Grade".
//All styles must be in the Student.css file.
//Any student can add a new grade (must NOT be negative), calculate the grades avg and can change faculty
//Create the logic to add a new grade (without change the faculty it's critical) and change avg evre time a new grade is added.
//And create the fucking function for add a new grade and change avg evre time a new grade is added.
// Add a useState hook to manage the students grades avg only in the Student component.
//Add achanged evry adding a new grade and change avg evre time a new grade is added.
// Need the input element for adding new grades and a button to submit the new grade.
//Add the logic to add a new grade and change avg evre time a new grade is added.
//Do not use the fucking console.log, use the state to manage the avg and grades.
//Do not use the fucking propmp or alert window, STOOOP IT, use the state to manage the avg and grades.
//All date MOST be presented in 3 columns
//Bold the fucking titles
// Do not use the document. functions!!!!! It's a fucking React component, use the state and props of fucking react to manage the data

import { useState, useEffect } from 'react';
import './Student.css'; // Assuming you have a CSS file for styles

function Student({ studentData, addGrade }) {
    const calculateAverage = () => {
        const grades = studentData.grades;
        if (grades.length === 0) return 0;
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / grades.length + 1).toFixed(2); // Add 1 to avg, round to 2 decimals
    };
    const [avg, setAvg] = useState(calculateAverage());
    const [newGrade, setNewGrade] = useState(0);

    // Update avg when grades change
    // Assumes studentData.grades is updated externally
    useEffect(() => {
        setAvg(calculateAverage());
    }, [studentData.grades]);

    const handleAddGrade = () => {
        if (newGrade >= 0) {
            addGrade(studentData.name, Number(newGrade));
            setNewGrade(0);
        }
    };

    return (
        <div className="student-container">
            <div className="student">
                <h3 className="student-name">{studentData.name}</h3>
                <p className="student-faculty"><strong>Faculty:</strong> {studentData.faculty}</p>
                <p className="student-average average-grade"><strong>Average Grade:</strong> {avg}</p>
                <h4><strong>Grades:</strong></h4>
                <ul className="grades-list">
                    {studentData.grades.map((grade, index) => (
                        <li key={index}><strong>{grade}</strong></li>
                    ))}
                </ul>
                <div className="add-grade">
                    <h4><strong>Add New Grade</strong></h4>
                    <input
                        type="number"
                        placeholder="Add new grade"
                        value={newGrade}
                        onChange={e => setNewGrade(e.target.value)}
                    />
                    <button onClick={handleAddGrade}>Add Grade</button>
                </div>
            </div>
        </div>
    );
}

export default Student